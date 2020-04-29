// generate random password
function generate() {
	// set password length/complexity
	let complexity = document.getElementById("slider").value;

	//possible password values
	let values =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[];?><,./-=";

	let password = "";

	// creat for loop to choose password characters
	for (var i = 0; i <= complexity; i++) {
		password =
			password +
			values.charAt(Math.floor(Math.Random() * Math.floor(values.length - 1)));
	}

	// add password to textbox/display area
	document.getElementById("display").value = password;
}
