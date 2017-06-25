let outputArea = document.getElementById("output-area");
let inputArea = document.getElementById("input-area");
let submit = document.getElementById("submit");
let letters = /^[A-Za-z]+$/;

function reversal() {
	submit.addEventListener("click", function() {
		if(inputArea.value.match(letters)) {
			let string = inputArea.value.split("").reverse().join("");
			outputArea.innerHTML = string;
		} else {
			alert("Letters only please");
		}
	})
}

function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);