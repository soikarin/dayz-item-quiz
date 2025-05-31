var currentItem;
var askedItems = [];
var skips = 3;

var userGuessInputField = document.getElementById("userGuess");
userGuessInputField.addEventListener("keydown", function (e) {
	if (e.code === "Enter") {
		checkAnswer();
	}
});

function checkAnswer() {
	var userGuess = document.forms["guessForm"]["userGuess"].value;

	if (userGuess == '' && skips > 0) {
		skipItem();
		randomItem();
	}

	if (items[currentItem].acceptedAnswers.includes(userGuess.toLowerCase())) {
		askedItems.push(items[currentItem].itemName);
		document.getElementById("userGuess").value = '';
		randomItem();
		return true;
	} else {
		document.getElementById("userGuess").value = '';
		return false;
	}
}

function generateRandom() {
	var a = Math.floor(Math.random() * items.length);
	return a;
}

function randomItem() {
	var randomNumber;
	do {
		randomNumber = generateRandom();
	} while (randomNumber == currentItem);
	console.log("currentItem: ", currentItem);
	currentItem = randomNumber;
	setItem();

}

function setItem() {
	if (askedItems.includes(items[currentItem].itemName) == false) {
		document.getElementById("itemPicture").src = items[currentItem].image;
	} else if (askedItems.length == items.length) {
		document.getElementById("guessInputDiv").hidden = true;
		document.getElementById("itemPicture").hidden = true;
		document.getElementById("gamePassed").hidden = false;
		document.getElementById("gamePassed").autoplay = true;
		document.getElementById("newGameDiv").hidden = false;
	} else {
		randomItem();
	}
}

function showGameElements() {
	if (!document.getElementById("playButtonDiv").hidden) {
		document.getElementById("playButtonDiv").hidden = true;
	}
	if (document.getElementById("imageDiv").hidden || document.getElementById("guessInputDiv").hidden) {
		document.getElementById("imageDiv").hidden = false;
		document.getElementById("guessInputDiv").hidden = false;
	}
}

function play() {
	currentItem = generateRandom();
	showGameElements();
	randomItem();
}

function skipItem() {
	if (skips > 0) {
		skips--;
		console.log(skips);
	} else if (skips <= 0) {
		
	}
}

function newGame() {
	location.reload();
}
/*
!function () {
	function detectDevTool(allow) {
		if (isNaN(+allow)) allow = 100;
		var start = +new Date(); // Validation of built-in Object tamper prevention.
		debugger;
		var end = +new Date(); // Validates too.
		if (isNaN(start) || isNaN(end) || end - start > allow) {
			document.getElementById("itemPicture").src = "./images/avon.gif";
		}
	}
	if (window.attachEvent) {
		if (document.readyState === "complete" || document.readyState === "interactive") {
			detectDevTool();
			window.attachEvent('onresize', detectDevTool);
			window.attachEvent('onmousemove', detectDevTool);
			window.attachEvent('onfocus', detectDevTool);
			window.attachEvent('onblur', detectDevTool);
		} else {
			setTimeout(argument.callee, 0);
		}
	} else {
		window.addEventListener('load', detectDevTool);
		window.addEventListener('resize', detectDevTool);
		window.addEventListener('mousemove', detectDevTool);
		window.addEventListener('focus', detectDevTool);
		window.addEventListener('blur', detectDevTool);
	}
}();
*/



