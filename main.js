const items = [
	{
		category: "weapons",
		image: "./images/weapons/AK74.webp",
		acceptedAnswers: ["ak-74", "ak74", "ka-74", "ka74", "5.45 ak", "5.45 ka", "5.45x39mm ak", "5.45x39mm ka"],
		itemName: "KA-74"
	},
	{
		category: "weapons",
		image: "./images/weapons/AK101.webp",
		acceptedAnswers: ["ak-101", "ak101", "ka-101", "ka101", "5.56 ka", "5.56x45mm ka", "5.56 ak", "5.56x45mm ak"],
		itemName: "KA-101"
	}
];

var currentItem;

var userGuessInputField = document.getElementById("userGuess");
userGuessInputField.addEventListener("keydown", function (e) {
	if (e.code === "Enter") {
		checkAnswer();
	}
});

function checkAnswer() {
	var userGuess = document.forms["guessForm"]["userGuess"].value;
	console.log(`${userGuess}`);
	if (items[currentItem].acceptedAnswers.includes(userGuess.toLowerCase())) {
		console.log("checkAnswer: true");
		return true;
	} else {
		console.log("checkAnswer: false");
		return false;
	}
}

function randomItem() {
	var a = Math.floor(Math.random() * items.length);
	currentItem = a;
	console.log("currentItem: " + `${currentItem}`);
	var itemsIndex = items[currentItem].image;
	document.getElementById("itemPicture").src = itemsIndex;

	if (document.getElementById("imageDiv").hidden = true) {
		document.getElementById("imageDiv").hidden = false;
	}

	if (document.getElementById("guessInputDiv").hidden = true) {
		document.getElementById("guessInputDiv").hidden = false;
	}

	document.getElementById("playButtonDiv").hidden = true;

	console.log(items[currentItem].acceptedAnswers);
}



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




