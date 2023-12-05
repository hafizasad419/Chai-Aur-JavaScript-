let randomNumber = parseInt((Math.random() * 100) + 1)
let userInput = document.querySelector('#guessField');
let submit = document.querySelector('#submit');
let previousGuesses = document.querySelector('.previousGuesses');
let remainGuesses = document.querySelector('.remainGuesses');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');


// let prevGuessArr = [];
let numGuess = 1;
let p = document.createElement('p');
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let guess = parseInt(userInput.value)
        validateGuess(guess)

    })
}

function validateGuess(guess) {

    if (guess <= 0 || guess > 100 || guess === '' || isNaN(guess)) {
        alert(`Please Enter a number from 1 to 100`)
    } else {
        // prevGuessArr.push(guess);
        if (numGuess === 10) {
            manipulateGuess(guess)
            displayMessage(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        } else {
            manipulateGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Won the game. Random Number was ${randomNumber}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Random Number is geater`)
    } else if (guess > randomNumber) {
        displayMessage(`Random Number is smaller`)
    }
}


function manipulateGuess(guess) {
    userInput.value = ''


    if (isNaN(guess)) {
        // then do not manipulate numGuess and remian Guess
    } else {
        previousGuesses.innerHTML += `${guess}, `;
        numGuess++;
        remainGuesses.innerHTML = `${11 - numGuess}`

    }
}



function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    userInput.value = ''
    submit.disabled = true
    userInput.disabled = true;
    p.classList.add('button')
    p.innerHTML =  `<span id="newGame">Start New Game</span>`
    p.style.cursor = 'pointer'
    p.style.display = 'inline'
    p.style.backgroundColor = 'e28f11'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        // e.preventDefault()
        randomNumber = parseInt((Math.random() * 10) + 1)
        // prevGuessArray = []
        remainGuesses.innerHTML = `${11 - numGuess}`
        previousGuesses.innerHTML = ''
        numGuess = 1
        submit.disabled = false
        userInput.disabled = false;
        startOver.removeChild(p)
        displayMessage('')
        playGame = true

    })

}

