let outputRev = document.getElementById("reversal");
let outputAlph = document.getElementById("alphabits");
let outputPal = document.getElementById("palindrome");
let inputArea = document.getElementById("input-area");
let submit = document.getElementById("submit");
let letters = /^[A-Za-z]+$/;
let testString = "";

inputArea.addEventListener("keyup", function(event){
	if (event.keyCode === 13) {
		submit.click();
	}
})

submit.addEventListener("click", function (testString) {
	if(inputArea.value.match(letters)) {
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	} else {
		alert("Letters only please");
	}
})

function reversal(testString) {
	testString = inputArea.value.split("").reverse().join("");
	outputRev.innerHTML = testString;
}

function alphabits(testString) {
	testString = inputArea.value.split("").reverse().join("");
	newTestString = testString.split("").sort().join("");
	outputAlph.innerHTML = newTestString;
}

function palindrome(testString) {
	testString = inputArea.value.split("");
	let length = Math.floor(testString.length/2);
	for (i = 0; i < length; i++) {
		if (testString[i] !== testString[testString.length - i - 1])
			return false;
	outputPal.innerHTML = "It's a palindrome";
	}
}