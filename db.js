//-----------------------------
//#region Database Connection
//-----------------------------
const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "wordledb.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});

//#endregion Database Connection

let getCorrect = () =>{
  return new Promise((resolve, reject) =>{
    db.get(`SELECT word FROM correctword LIMIT 1 OFFSET 0`, [], (error, result)=>{
      if (error) {
        console.error(error.message);
        reject(error);
      }
      if (result) {
        console.log("jsksj");
        resolve(result);
      } else {
        console.log("could not find correct word");
      }
    });
  }
  );
  
}
let checkGuess = (guess, correct) =>{
  statusLst = [];
  for(let i = 0; i < 5; i++){
    if(guess[i] === correct[i]){
      statusLst[i] = "correct";
    }
    else if(correct.includes(guess[i])){
      statusLst[i] = "present";
    }
    else{
      statusLst[i] = "absent";
    }
  }
  return statusLst;
  
};
//-----------------------------
//#region Routes
const guess = (request, response) => {
  // Parse the id to generate a SQLite query
  const guess = request.params.guess;
  const query = `SELECT possword FROM word WHERE possword = ?`;//random db columns/name

  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.get(query, [guess], (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      const findResult = async() =>{
        try{
          let correctWord = await getCorrect();
          let statusLst = checkGuess(guess, correctWord.word);
          response.status(200).json({guess, statusLst});
        }
        catch{
          response.sendStatus(500);
        }
      } 
      findResult();
      }
      else {
      response.sendStatus(404);
    }
  });
};

const valid = (request, response) => {
  // Parse the id to generate a SQLite query
  const guess = request.params.guess;
  const query = `SELECT possword FROM word WHERE possword = ?`;//random db columns/name

  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.get(query, [guess], (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      response.status(200).json("true");
    }
    else {
      response.status(404).json("false");
    }
  });
};
//-----------------------------
//#endregion Routes
module.exports = {
  guess, valid
};





