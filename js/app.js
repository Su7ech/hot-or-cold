
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

// window.onload = function() {
// 	function newGame() {
// 		var cpuNum = getRandomInt(1, 100);
// 	}
// }

function newGame() {
	var randomNum = getRandomInt(1, 100);
	var userInput = getUserInput();
	compareNumbers(userInput, randomNum);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareNumbers(user, cpu) {
	if (cpu - user > 50) {
		alert("ICE COLD!");
	} else if (cpu - user >= 30) {
		alert("Cold");
	} else if (cpu - user >= 20) {
		alert("Warm");
	} else if (cpu - user >= 10) {
		alert("Hot");
	} else if (cpu - user > 0) {
		alert("Very Hot!");
	} else if (cpu == user) {
		alert("Winner!");
	}
}

function getUserInput() {
  var element = document.getElementById("userGuess");
  var userInput = element.value;
  var userNum = parseInt(userInput, 10);
  if (isValidNumber(userNum)) {
    return userNum;
    element.value = '';
  } else {
    alert("Not a valid number, try again...");
    element.value = '';
  }
}

function isValidNumber(n) {
  return Number.isInteger(n);
} 


