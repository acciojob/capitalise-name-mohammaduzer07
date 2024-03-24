//your JS code here. If required.
let input = document.getElementById("fname")

input.addEventListener("blur", CapitalizeName);

function CapitalizeName() {
	let capName = input.value;
	input.value = capName.toUpperCase();
}
