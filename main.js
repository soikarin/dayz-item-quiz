const items = [
	{
		category: "weapons",
		image: "./images/weapons/AK74.webp",
		acceptedAnswers: ["ak-74", "ak74", "ka-74", "ka74", "ak 74", "ka 74", "5.45 ak", "5.45 ka", "5.45x39mm ak", "5.45x39mm ka"],
		itemName: "KA-74"
	},
	{
		category: "weapons",
		image: "./images/weapons/AK101.webp",
		acceptedAnswers: ["ak-101", "ak101", "ka-101", "ka101", "ak 101", "ka 101", "5.56 ka", "5.56x45mm ka", "5.56 ak", "5.56x45mm ak"],
		itemName: "KA-101"
	},
	{
		category: "weapons",
		image: "./images/weapons/AKM.webp",
		acceptedAnswers: ["ak-47", "ka-m", "ak-m", "akm", "kam", "ak 47", "ka 47", "kalashnikov", "kalash"],
		itemName: "KA-M"
	},
	{
		category: "weapons",
		image: "./images/weapons/AKS74U.webp",
		acceptedAnswers: ["paska ak", "paskaak", "kassi", "aks74u", "kas-74u", "aks-74u", "mini ak"],
		itemName: "KAS-74U"
	},
	{
		category: "weapons",
		image: "./images/weapons/ASVAL.webp",
		acceptedAnswers: ["asval", "sval", "as val", "s val"],
		itemName: "SVAL"
	},
	{
		category: "weapons",
		image: "./images/weapons/Aug.webp",
		acceptedAnswers: ["aur ax", "aurax", "pitkä aug", "aug a3", "auga3", "aug ax", "steyr aug a3"],
		itemName: "AUR AX"
	},
	{
		category: "weapons",
		image: "./images/weapons/AugShort.webp",
		acceptedAnswers: ["aur a1", "aug a1", "lyhyt aug", "steyr aug a1", "paska aug"],
		itemName: "AUR A1"
	}
];

var currentItem;
var askedItems = [];

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
		askedItems.push(items[currentItem].itemName);
		console.log("current item name: " + items[currentItem].itemName);
		console.log("askedItems: " + `${askedItems}`);
		play();
		return true;
	} else {
		console.log("checkAnswer: false");
		document.getElementById("userGuess").value = '';
		return false;
	}
}

function randomItem() {
	//produces a random number between 0 and items.length
	var a = Math.floor(Math.random() * items.length);
	//changes the currentItem variable to a randomized number
	currentItem = a;
	console.log("currentItem: " + `${currentItem}`);


}

function showGameElements() {
	if (document.getElementById("imageDiv").hidden = true) {
		document.getElementById("imageDiv").hidden = false;
	}

	if (document.getElementById("guessInputDiv").hidden = true) {
		document.getElementById("guessInputDiv").hidden = false;
	}
}

function play() {
	document.getElementById("playButtonDiv").hidden = true;
	showGameElements();
	//empties the input field
	document.getElementById("userGuess").value = '';
	randomItem();

	if (askedItems.includes(items[currentItem].itemName) == false) {
		document.getElementById("itemPicture").src = items[currentItem].image;
	} else if (askedItems.length == items.length) {
		document.getElementById("guessInputDiv").hidden = true;
		document.getElementById("itemPicture").hidden = true;
		document.getElementById("gamePassed").hidden = false;
		document.getElementById("gamePassed").autoplay = true;
		document.getElementById("newGameDiv").hidden = false;
	} else {
		play();
	}

	console.log(items[currentItem].acceptedAnswers);
}

function newGame() {
	location.reload();
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




