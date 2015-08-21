$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    newGame();

    // Starts game on page load
    playGame();

});

// Allows a user to start a new game by clicking on the '+ New Game' link in top right corner
function newGame() {
    $('.new').click(function(e) {
        e.preventDefault();
        resetGame();
        playGame();
    })
}

// Start Game
function playGame() {
    var randomNum = getRandomNum(1, 100);
    var guessBtn = document.getElementById('guessButton');

    $(guessBtn).off('click').click(function(e) {
        e.preventDefault();
        var userNum = getUserInput();
        document.getElementById('userGuess').value = '';
        previousGuess(userNum);
        var results = compareValues(randomNum, userNum);
        if (isValidNumber(userNum)) {
            incrementCount();
            giveFeedback(results);
            checkForWinner(results);
        } else {
            alert("Not a valid number, try again...");
        }
    });
}

// Compare User input with random number
function compareValues(cpu, user) {
    var value = Math.abs(cpu - user);

    if (value > 50) {
        return ("Ice Cold!!!");
    } else if (value > 30) {
        return ("Cold");
    } else if (value > 20) {
        return ("Warm");
    } else if (value > 10) {
        return ("Hotter");
    } else if (value > 0) {
        return ("SO HOT!!!");
    } else if (user == cpu) {
        return ("YOU GOT IT!!!");
    }
}

// Adds Previous guesses to list 
function previousGuess(num) {
    var prevGuess = num;
    var node = document.createElement('li');
    var guesses = document.createTextNode(prevGuess);

    if (isValidNumber(prevGuess)) {
        node.appendChild(guesses);
        document.getElementById('guessList').appendChild(node);
    } else {
        return false;
    }
}

// Checks for winning selection and switches guess button to 'play again' button
function checkForWinner(results) {
	var guessButton = $('#guessButton');

    if (results == "YOU GOT IT!!!") {
        guessButton.attr('value', 'Play Again').off('click').click(function(e) {
            e.preventDefault();
            resetGame();
            playGame();
        });
    }
}

// Displays message after each guess saying if they're getting colder, warmer, or if they get the answer
function giveFeedback(r) {
    var feedback = $('#feedback');

    feedback.text(r);
}

// Increments the count below the guess button to display the number of guesses it took to get the answer
function incrementCount() {
    var getCount = $('#count')
    var count = parseInt(getCount.text(), 10);
    var newCount = count += 1;

    newCount.toString();
    getCount.text(newCount);
}

// Gets the user input, converts it to an Integer and returns the number if it's valid
function getUserInput() {
    var input = document.getElementById('userGuess');
    var text = input.value;
    var guess = parseInt(text, 10);

    return (isValidNumber(guess)) ? guess : false;
}

// Resets the layout so the user can start a new game
function resetGame() {
    var currentDiv = document.getElementById("guessList");
    var resetInput = document.getElementById("userGuess");

    while (currentDiv.firstChild) {
        currentDiv.removeChild(currentDiv.firstChild);
    }

    resetInput.value = '';

    $('#count').text('0');

    giveFeedback('Make your guess');

    $('#guessButton').attr('value', 'Guess');
}

// Checks if the user input is a valid number
function isValidNumber(n) {
    return Number.isInteger(n);
}

// Returns a random number between a given amount for the user to guess
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
