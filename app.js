const text = document.querySelector("[data=text]");
const sayButton = document.querySelector("[data=say-button]");

text.addEventListener("keydown", (event) => {
	const value = text.value;
	const output = new SpeechSynthesisUtterance(value);

	if ((event.ctrlKey || event.metaKey) && event.keyCode == 13) {
		window.speechSynthesis.speak(output);
	}

	output.addEventListener("end", () => {
		text.value = "";
		text.focus();
	});
});

sayButton.addEventListener("click", (event) => {
	const value = text.value;
	const output = new SpeechSynthesisUtterance(value);
	window.speechSynthesis.speak(output);

	output.addEventListener("end", () => {
		text.value = "";
		text.focus();
	});
});
