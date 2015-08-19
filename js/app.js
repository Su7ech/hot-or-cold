
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
    console.log(compareValues(randomNum, userNum));
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

function displayResult() {

}

function getUserInput() {
  var input = document.getElementById('userGuess');
  var text = input.value;
  var guess = parseInt(text, 10);
  if (isValidNumber(guess)) {
    console.log(guess);
    return guess
  } else {
    alert("Not a valid number, try again...");
    text = '';
  }
  // var button = document.getElementById('guessButton');
  // var userInput = document.getElementById('userGuess').value;
  // button.onclick = function(e) {
  //   e.preventDefault();
  //   var userNum = userInput.value;
  //   userNum = parseInt(userNum, 10);
  //   if (isValidNumber(userNum)) {
  //     console.log(userNum);
  //     // console.log(compareValues(cpu, userNum));
  //     userInput.value = '';
  //     return userNum;
  //   } else {
  //     alert("Not a valid number, try again...");
  //     userInput.value = '';
  //   }
  // }
}

function isValidNumber(n) {
  return Number.isInteger(n);
} 

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) +min;
}


// window.onload = function() {
// 	function newGame() {
// 		var cpuNum = getRandomInt(1, 100);
// 	}
// }

// function newGame() {
// 	var randomNum = getRandomInt(1, 100);
// 	var userInput = getUserInput();
// 	compareNumbers(userInput, randomNum);
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function compareNumbers(user, cpu) {
// 	if (cpu - user > 50) {
// 		("ICE COLD!");
// 	} else if (cpu - user >= 30) {
// 		("Cold");
// 	} else if (cpu - user >= 20) {
// 		("Warm");
// 	} else if (cpu - user >= 10) {
// 		("Hot");
// 	} else if (cpu - user > 0) {
// 		("Very Hot!");
// 	} else if (cpu == user) {
// 		("Winner!");
// 	}
// }

// function getUserInput() {
//   var element = document.getElementById("userGuess");
//   var userInput = element.value;
//   var userNum = parseInt(userInput, 10);
//   if (isValidNumber(userNum)) {
//     return userNum;
//     element.value = '';
//   } else {
//     alert("Not a valid number, try again...");
//     element.value = '';
//   }
// }




