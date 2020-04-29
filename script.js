//this reuseable function gets a random element from the provided arr
function getRand(arr) {
	var randInd = Math.floor(Math.random() * arr.length);
	var randEl = arr[randInd];
	return randEl;
}

// generate random password
function generate() {
	var specialCharacters = [
		"!",
		"#",
		"$",
		"%",
		"&",
		"(",
		")",
		"*",
		"+",
		"-",
		".",
		"/",
		":",
		";",
		"<",
		"=",
		">",
		"?",
		"@",
	];
	var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var lowerCase = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	var upperCase = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	]; // set password length/complexity
	//let complexity = document.getElementById("slider").value;
	var allOptions = [];
	//possible password values

	let password = [];

	var idSpecialChars = confirm(
		"Do you want special characters in your password?"
	); // OK or cancel => ok - idSp = True / False

	var idNumericChars = confirm("Do you want numbers in your password?"); // be sure to get a random function
	var idLowerCase = confirm("Do you want lower case letters?");
	var idUpperCase = confirm("Do you want upper case leters?");
	var lengthPass = prompt("How long do you want your password to be?");

	if (idNumericChars) {
		allOptions = allOptions.concat(numericCharacters);
	}

	if (idLowerCase) {
		allOptions = allOptions.concat(lowerCase);
	}

	if (idUpperCase) {
		allOptions = allOptions.concat(upperCase);
	}

	if (idSpecialChars) {
		allOptions = allOptions.concat(specialCharacters);
		//we need a random function that picks one element from specialCharacters and appends it to password array
	}
	// creat for loop to choose password characters
	for (var i = 0; i <= complexity; i++) {
		password =
			password +
			values.charAt(Math.floor(Math.Random() * Math.floor(values.length - 1)));
	}

	// add password to textbox/display area
	document.getElementById("display").value = password;
}
