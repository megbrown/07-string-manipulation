let outputRev = document.getElementById("reversal");
let outputAlph = document.getElementById("alphabits");
let outputPal = document.getElementById("palindrome");
let inputArea = document.getElementById("input-area");
let submit = document.getElementById("submit");
let letters = /^[A-Za-z]+$/;


function reversal(testString) {
	submit.addEventListener("click", function() {
		if(inputArea.value.match(letters)) {
			testString = inputArea.value.split("").reverse().join("");
			outputRev.innerHTML = testString;
		} else {
			alert("Letters only please");
		}
	})
}

function alphabits(testString) {
	submit.addEventListener("click", function() {
		if(inputArea.value.match(letters)) {
			testString = inputArea.value.split("").reverse().join("");
			newTestString = testString.split("").sort().join("");
			outputAlph.innerHTML = newTestString;
		} else {
			alert("Letters only please");
		}
	})
}

function palindrome(testString) {
	submit.addEventListener("click", function() {
		if(inputArea.value.match(letters)) {
			testString = inputArea.value.split("");
			let length = Math.floor(testString.length/2);
			for (i = 0; i < length; i++) {
				if (testString[i] !== testString[testString.length - i - 1])
					return false;
			outputPal.innerHTML = "It's a palindrome";
			}
		} else {
			alert("Letters only please");
		}
	})
}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);