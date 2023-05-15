//variable that stores the secret word eg. Daphne
var secretWord = "anaconda";
//variable that stores the secret word into an array in lower case eg. ["d","a","p","h","n","e"]
var secretWordArray = secretWord.toLowerCase().split("");

//display the secret word onto game container

//target the game container

var gameContainer = document.getElementById("gameContainer");

//completedArray that saves the length of the completed letters
var completedArray = [];

//for loop that dynamically adds elements according to length of word

for (let i = 0; i <secretWordArray.length; i++) {
    //create new div elements
    var divElement = document.createElement("div");
    //appends div onto game container
    gameContainer.appendChild(divElement);
}

    //store keyed keys in an array
    var keyed = [];

    //add event listener to game container
    var page = document.querySelector("body");
    page.addEventListener("keydown", function(event) {
        //store key entered by user
        var key = event.key;
        console.log(key);
        
        //Index of function used to check if the new key is already in existing keyed array
       if (keyed.indexOf(key)!== -1) {
        alert(`you've already tried this key!`);
       } else {
        //push new key into keyed array
        keyed.push(key);
                //function to check which indexes match the key
                var matchingIndexes = getMatchingIndexes (secretWordArray, key);
                //for loop which adds text content to corresponding div
                for(let i = 0; i < matchingIndexes.length; i++) {
                    gameContainer.children[matchingIndexes[i]].textContent = key;
                    gameContainer.children[matchingIndexes[i]].dataset.completed = true;
                    console.log(gameContainer.children[matchingIndexes[i]]);
                    }
       }

       if(completedArray.length === secretWordArray.length) {
        var winningMessage = document.createElement("p");
        winningMessage.textContent = `You've won!`
        gameContainer.appendChild(winningMessage);
       }

        }

    )

    var textContainer = document.getElementById("textContainer");

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
            completedArray.push(i);
            console.log(completedArray);
        }
    }
    return indexes;
}


//displayWin function which displays a winning message on the screen and resets start button
function displayWin() {
    startButton.style.display = "block";
    startButton.dataset.visibility = "visible";
    var winningMessage = document.createElement("p");
    winningMessage.textContent = `You've won! Click start to reset the game.`
    textContainer.appendChild(winningMessage);
}
