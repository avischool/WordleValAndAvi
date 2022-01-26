//-----------------------------
//#region Database Connection
//-----------------------------
const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, " .db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});

//#endregion Database Connection

let getCorrect = () =>{
  db.get(`SELECT word FROM correctword LIMIT 1 OFFSET 0`, [], (error, result)=>{
    if (error) {
      console.error(error.message);
      return;
    }
    if (result) {
      return result;
    } else {
      console.log("could not find correct word");
    }
  });
}
let checkGuess = (guess, correct) =>{
  statusLst = [];
  for(let i = 0; i < 5; i++){
    if(guess[i] === correct[i]){
      statusLst[i] = 2;
    }
    else if(correct.includes(guess[i])){
      statusLst[i] = 1;
    }
    else{
      statusLst[i] = 0;
    }
  }
  return statusLst;
  
}
//-----------------------------
//#region Routes
const guess = (request, response) => {
  // Parse the id to generate a SQLite query
  const guess = request.params.guess;
  const query = `SELECT posword FROM word WHERE posword = ?`;//random db columns/name

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
      let correctWord = getCorrect();
      statusLst = checkGuess(guess, correctWord);
      response.status(200).json({guess, statusLst});
    } else {
      response.sendStatus(404);
    }
  });
};
//-----------------------------
//#endregion Routes
module.exports = {
  guess
};

console.log(checkGuess("hello", "chain"));