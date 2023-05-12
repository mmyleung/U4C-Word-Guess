//variable that stores the secret word eg. Daphne
var secretWord = "Daphne";
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
    //set data-visibility to hidden
    divElement.setAttribute("data-index", i);
    //appends div onto game container
    gameContainer.appendChild(divElement);
}

//add event listener to game container

var page = document.querySelector("body");
page.addEventListener("keydown", function(event) {
    //store key entered by user
    var key = event.key;
    console.log(key);
    //use the key to look up the index of the matching letter in the array
    //if matches index >= 0, else not present
    let index = secretWordArray.indexOf(key);
    if (index < 0) {
        // alert(`wrong guess ${key}, try again`);
        return;
    } else {
        //find the corresponding div element and apply text content
        gameContainer.children[index].textContent = key;
    }

    console.log(index);
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

//target button to start the timer
var startButton = document.getElementById("startBtn");
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    setTimer();
    if (startButton.dataset.visibility === "visible") {
        startButton.style.display = "none";
        startButton.dataset.visibility = "hidden";
    }
})
