
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    $('.new').click(function(e) {
      e.preventDefault();
      resetGame();
      playGame();
    })

    // Starts game on page load
    playGame();

});

// function newGame() {
//   var ul = document.getElementById('guessList');
//   var game = document.getElementsByClassName('new')[0];
//   game.onclick = function(e) {
//     e.preventDefault();
//     alert("This is working");
//     resetGuessList();
//     playGame();
//   }
// }

function playGame() {
  var randomNum = getRandomNum(1, 100);
  console.log(randomNum);
  var guessBtn = document.getElementById('guessButton');
  guessBtn.onclick = function(e) {
    e.preventDefault();
    var userNum = getUserInput();
    document.getElementById('userGuess').value = '';
    previousGuess(userNum);
    var results = compareValues(randomNum, userNum);
    if (isValidNumber(userNum)) {
      // displayResult(results);
      incrementCount();
      alert(results);
    } else {
      alert("Not a valid number, try again...");
    }
  }
}

function compareValues(cpu, user) {
  if ((user - cpu > 50) || (cpu - user > 50)) {
    return ("Ice Cold!!!");
  } else if ((user - cpu > 30) || (cpu - user > 30)) {
    return ("Cold");
  } else if ((user - cpu > 20) || (cpu - user > 20)) {
    return ("Warm");
  } else if ((user - cpu > 10) || (cpu - user > 10)) {
    return ("Hotter");
  } else if ((user - cpu > 0)  || (cpu - user > 0)) {
    return ("SO HOT!!!");
  } else if (user == cpu) {
    return ("YOU GOT IT!!!");
  }
}

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

function incrementCount() {
  var getCount = $('#count')
  var count = parseInt(getCount.text(), 10);
  var newCount = count += 1;
  newCount.toString();
  getCount.text(newCount);
}

function getUserInput() {
  var input = document.getElementById('userGuess');
  var text = input.value;
  var guess = parseInt(text, 10);
  if (isValidNumber(guess)) {
    console.log(guess);
    return guess
  } else {
    return false
  }
}

function resetGame() {
  var currentDiv = document.getElementById("guessList");
  while (currentDiv.firstChild) {
    currentDiv.removeChild(currentDiv.firstChild);
  }
  $('#count').text('0');
}

function isValidNumber(n) {
  return Number.isInteger(n);
} 

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) +min;
}
