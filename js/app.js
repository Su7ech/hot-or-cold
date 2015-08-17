
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

function playGame() {
  var userGuess = getUserInput();
  var cpuNum = getRandomInt(1, 100);
}

function newGame() {
	var cpuNum = getRandomInt(1, 100);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserInput() {
  var element = document.getElementById("userGuess");
  var userInput = element.value;
  var userNum = parseInt(userInput, 10);
  if (isValidNumber(userNum)) {
    alert("This is valid");
    element.value = '';
  } else {
    alert("Not a valid number, try again...");
    element.value = '';
  }
}

function isValidNumber(n) {
  return Number.isInteger(n);
} 


