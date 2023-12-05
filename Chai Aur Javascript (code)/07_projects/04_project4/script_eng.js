let randomNumber = parseInt((Math.random() * 100) + 1);

let submit = document.querySelector('#submit');
let userInput = document.querySelector('#guessField');
let prevoiusGuesses = document.querySelector('.previousGuesses');
let remainGuesses = document.querySelector('.remainGuesses');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

// let prevGuess = [];
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

    if (guess < 0 || isNaN(guess) || guess == '') {
        alert(`Please Enter a Valid number from 1 to 100`)
    }
    else if (guess > 100) {
        alert(`Please Enter a Valid number from 1 to 100`)
    }

    else {
        // prevGuess.push(guess)

        if (numGuess >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over, Random Number Was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congrats, You Won The Game, Random Number was exactly ${randomNumber}. `)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Random Number is Greater Than ${guess}.`)
    } else if (guess > randomNumber) {
        displayMessage(`Random Number is Smaller Than ${guess}.`)
    }

}

function displayGuess(guess) {
    userInput.value = '';
    if (isNaN(guess)) {
        //
    } else {
        prevoiusGuesses.innerHTML += `${guess} , `;
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
        // prevGuess = []
        numGuess = 1
        prevoiusGuesses.innerHTML = ''
        remainGuesses.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')

        playGame = true
    })
}
