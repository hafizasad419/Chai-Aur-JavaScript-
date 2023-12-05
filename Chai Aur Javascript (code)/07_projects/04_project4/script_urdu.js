let randomNumber = parseInt((Math.random() * 100) + 1);
// console.log(randomNumber);

let submit = document.querySelector('#submit');
let userInput = document.querySelector('#guessField');
let previousGuesses = document.querySelector('.previousGuesses');
let remainGuesses = document.querySelector('.remainGuesses');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');


let p = document.createElement('p');
// let prevGuessArray = [];
let numGuess = 1;


let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}



function validateGuess(guess) {
    if (guess < 0) {
        alert(`${guess} 1 Se Chota Hai, Braaye Mehrbaani 1 Se 100 K Drmyaan Koi Number Likhiye`)
    } else if (guess == 0 || guess == '') {
        alert(`Aap Ne ${guess} Likha , Braaye Mehrbaani 1 Se 100 K Drmyaan Koi Number Likhiye`)
    } else if (isNaN(guess)) {
        alert(` Braaye Mehrbaani 1 Se 100 K Drmyaan Koi Number Likhiye`)
    } else if (guess > 100) {
        alert(`${guess} 100 Se Bara Hai, Braaye Mehrbaani 1 Se 100 K Drmyaan Koi Number Likhiye`)
    } else {
        // prevGuessArray.push(guess)

        if (numGuess === 10) {
            manipulateGuess(guess)
            displayMessage(`Oho, Game Over Hogyi Hai, Random Number ${randomNumber} Tha.`)
            endGame()
        } else {
            manipulateGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Mubarak, Aap Game Jeet Gye, Random Number ${randomNumber} Hee Tha. `)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Random Number ${guess} Se Bara Hai`)
    } else if (guess > randomNumber) {
        displayMessage(`Random Number ${guess} Se Chota Hai`)
    }
}


function manipulateGuess(guess) {
    userInput.value = ''

    if (isNaN(guess)) {
        //
    } else {
        previousGuesses.innerHTML += `${guess} , `;
        numGuess++;
        remainGuesses.innerHTML = `${11 - numGuess}`
    }

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<span id="newGame">Start New Game</span>`
    p.style.cursor = 'pointer'
    p.style.display = 'inline'
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame() {
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt((Math.random() * 100) + 1);
        // prevGuessArray = []
        numGuess = 1
        previousGuesses.innerHTML = ''
        remainGuesses.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        displayMessage('')
    })
}