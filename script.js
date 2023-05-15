//variable that stores the secret word eg. Daphne
var secretWord = "anaconda";
//variable that stores the secret word into an array in lower case eg. ["d","a","p","h","n","e"]
var secretWordArray = secretWord.toLowerCase().split("");

//display the secret word onto game container

//target the game container

var gameContainer = document.getElementById("gameContainer");

//messageContainer displays messages eg. instructions, winning message and losing message
var messageContainer = document.getElementById("gameMessage");

//completedArray that saves the length of the completed letters
var completedArray = [];


//store keyed keys in an array
var keyed = [];

//function to start game

function startGame() {
    console.log("Start Game")

//remove existing HTML element in game container

gameContainer.innerHTML = "";

//remove elements in keyed arrays
keyed = [];

//for loop that dynamically adds elements according to length of word

for (let i = 0; i <secretWordArray.length; i++) {

    //create new div elements
    var divElement = document.createElement("div");
    //appends div onto game container
    gameContainer.appendChild(divElement);
}


    //add event listener to game container
    var page = document.querySelector("body");
    page.addEventListener("keydown", function(event) {
        event.stopImmediatePropagation();
        //store key entered by user
        var key = event.key;
        console.log(key);
        //Index of function used to check if the new key is already in existing keyed array
        if (keyed.indexOf(key) == -1) {
            //push new key into keyed array
            keyed.push(key);
            //function to check which indexes match the key
            var matchingIndexes = getMatchingIndexes (secretWordArray, key);
            //for loop which adds text content to corresponding div
            for(let i = 0; i < matchingIndexes.length; i++) {
                gameContainer.children[matchingIndexes[i]].textContent = key;
                }
        } else {
            alert(`you've already tried this key!`);
            return;
        }
       if(completedArray.length === secretWordArray.length) {
        displayWin();
       }
        }
    )
    //function to get all indexes that match a value
function getMatchingIndexes (arr, val) {
    var indexes = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            indexes.push(i);
            completedArray.push(i);
            console.log(completedArray);
        }
    }
    return indexes;
}
}


var textContainer = document.getElementById("textContainer");

//add timer to the game

//set timer to 30 seconds
let timerDisplay = document.getElementById("timer");

let setTimer;
var time = 30;

function timer() {
        time --;
        timerDisplay.textContent = `${time} seconds`;

    if (time === 0) {
            clearInterval(setTimer);
            if (completedArray.length !== secretWordArray.length) {
                messageContainer.textContent = `Sorry - time's up!`
                if (startButton.dataset.visibility === "hidden") {
                    startButton.style.display = "block";
                    startButton.dataset.visibility = "visible";
                }
                localStorage.setItem("losses", lossScore++);
                displayScore();
            }
        }
    }
//target button to start the timer and hide button
var startButton = document.getElementById("startBtn");
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    setTimer = setInterval(timer, 1000);
    if (startButton.dataset.visibility === "visible") {
        startButton.style.display = "none";
        startButton.dataset.visibility = "hidden";
    }
        //remove exisitng completedArray
    startGame();
    displayInstructions();
    time = 30;

})




//displayWin function which displays a winning message on the screen and resets start button
function displayWin() {
    startButton.style.display = "block";
    startButton.dataset.visibility = "visible";
    messageContainer.textContent = `You've won! Click start to reset the game.`
    clearInterval(setTimer);
    completedArray = [];
    keyed = [];
    //add 1 to score in local storage
    localStorage.setItem("wins", winScore++);
    displayScore();
}


function displayInstructions() {
    messageContainer.textContent = `Instructions: Press the start button to play. Start typing to guess the word!`
}

displayInstructions();

//add keys to local storage to store wins and losses

localStorage.setItem("wins", 0);
localStorage.setItem("losses", 0);

//target the win and losses elements and save into variable
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var winScore = localStorage.getItem("wins");
var lossScore = localStorage.getItem("losses");

console.log(winScore);

//function to display score
function displayScore() {
    wins.textContent = winScore;
    losses.textContent = lossScore;
}

displayScore()

