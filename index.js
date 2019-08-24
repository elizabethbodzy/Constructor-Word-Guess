var inquirer = require ("inquirer");
var prompt = require('prompt');

var word = require ("./word.js");

var guesses = 10;
var score = 0;

var wordsArray = ["Hey Jude", "Revolution", "Black Bird", "Yellow Submarine", "Let It Be", "Yesterday", "Come Together", "Here Comes the Sun"];

var randomWord;
var selectedWord;

function startGame () {
    console.log("It's time to start the game! Guess Beatle's related songs!")
}

function selectedWord () {
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]

    selectedWord = new Word (randomWord);
}

function guessWord () {
    console.log(selectedWord.display());

    inquirer.prompt([
        { 
            name: 'text',
            message: "Guess a letter!",
            // validate: 
        }
    ])
}