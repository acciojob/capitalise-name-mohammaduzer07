//your JS code here. If required.
let input = document.getElementById("fname")

input.addEventListner("blur", CapitalizeName);

function CapitalizeName() {
	let capName = input.value;
	input.value = capName.toUpperCase();
}
