let randomNumber = Math.ceil(Math.random() * 50 ); // get the random number between 0 to 1
let userGuess = document.getElementById("userInput");
let guessButton = document.getElementById("guessButton");
let resultArea = document.getElementById ("resultArea");
let historyArea = document.getElementById ("historyArea");
let resetButton = document.getElementById ("resetButton");
let messeage = '';
let chance = 5;
let history = [];
const START_TIME = 31; 
let time = START_TIME; // time start from 0
let setIntervalId; // timer will be assign to this variable
function timecounting() {
    setIntervalId = setInterval(() => {
        time -= 1;
        document.getElementById('timecount').innerHTML = time
        if (time===0) {
            resetGame();
        }
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
};
timecounting();// fire the timecounting function!!
guessButton.addEventListener("click",guess);
resetButton.addEventListener("click",resetGame);

function guess (){
    let userNumber = userGuess.value;
    chance = chance - 1;
    history.push(userNumber);
    if(userNumber == randomNumber){
        messeage = "hehe, you win";
    } else if(userNumber > randomNumber){
        messeage = "you are too big tata";
    } else if (userNumber < randomNumber){
        messeage = "you are too small tatata";
    }
    resultArea.innerHTML = `${messeage}`;
    chanceArea.innerHTML = `Chance : ${chance}`;
    historyArea.innerHTML = `History: ${history}`;
    if (chance===0) {
         guessButton.disabled=true;
    }
};
function resetGame () {
    chance =5;
    messeage ='';
    history= [];
    time=START_TIME;
    userGuess.value = '';
    resultArea.innerHTML = `${messeage}`;
    chanceArea.innerHTML = `Chance : ${chance}`;
    historyArea.innerHTML = `History: ${history}`;
    guessButton.disabled=false;
    clearInterval(refreshIntervalId);
}
