//variable that stores the secret word eg. Daphne
var secretWord = "anaconda";
//variable that stores the secret word into an array in lower case eg. ["d","a","p","h","n","e"]
var secretWordArray = secretWord.toLowerCase().split("");

console.log(secretWordArray);

//display the secret word onto game container

//target the game container

var gameContainer = document.getElementById("gameContainer");

//for loop that dynamically adds elements according to length of word

for (let i = 0; i <secretWordArray.length; i++) {
    //create new div elements
    var divElement = document.createElement("div");
    //adds dataset and set completed to false
    divElement.setAttribute("data-completed",false);
    //appends div onto game container
    gameContainer.appendChild(divElement);
}

var solvedArray = [];
//add event listener to game container

var textContainer = document.getElementById("textContainer");
var page = document.querySelector("body");
page.addEventListener("keydown", function(event) {
    //store key entered by user
    var key = event.key;
    console.log(key);
    //function to check which indexes match the key
    var matchingIndexes = getMatchingIndexes (secretWordArray, key);
    //for loop which adds text content to corresponding div
    for(let i = 0; i < matchingIndexes.length; i++) {
        gameContainer.children[matchingIndexes[i]].textContent = key;
    }
    if(solvedArray.length === secretWordArray.length) {
        startButton.style.display = "block";
        startButton.dataset.visibility = "visible";
        var winningMessage = document.createElement("p");
        winningMessage.textContent = `You've won!`
        textContainer.appendChild(winningMessage);
    }
})

//add timer to the game

//set timer to 30 seconds
let timer = document.getElementById("timer");
var time = 30;

function setTimer() {
    var setTimer = setInterval(function() {
        time --;
        timer.textContent = `${time} seconds`;
        

    if (time === 0) {
            clearInterval(setTimer);
        }
    },1000)}

//target button to start the timer and hide button
var startButton = document.getElementById("startBtn");
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    setTimer();
    if (startButton.dataset.visibility === "visible") {
        startButton.style.display = "none";
        startButton.dataset.visibility = "hidden";
    }
})

//function to get all indexes that match a value
function getMatchingIndexes (arr, val) {
    var indexes = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            indexes.push(i);
            //array which allows to compare length of solved vs wordarray
            solvedArray.push(i);
            console.log(solvedArray);
        }
    }
    return indexes;
}