
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    // Starts game on page load
    playGame();

});

function newGame() {

}

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

// function displayResult(cpu, user) {
//   var results = compareValues(cpu, user);
//   var newDiv = document.createElement("div");
//   var announce = document.createElement('h1')
//   var newContent = document.createTextNode(results);
//   announce.appendChild(newContent);
//   newDiv.appendChild(newContent);
//   alert(results);
// }

function getUserInput() {
  var input = document.getElementById('userGuess');
  var text = input.value;
  var guess = parseInt(text, 10);
  if (isValidNumber(guess)) {
    console.log(guess);
    return guess
  } else {
    return false
    // text = '';
  }
}

function isValidNumber(n) {
  return Number.isInteger(n);
} 

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) +min;
}
