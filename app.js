const textarea = document.querySelector("[data=textarea]");
const sayButton = document.querySelector("[data=say-button]");
const clearButton = document.querySelector("[data=clear-button]");

textarea.addEventListener("keydown", (event) => {
	const value = textarea.value;
	const output = new SpeechSynthesisUtterance(value);

	if ((event.ctrlKey || event.metaKey) && event.keyCode == 13) {
		window.speechSynthesis.speak(output);
	}

	output.addEventListener("end", () => {
		textarea.focus();
	});
});

sayButton.addEventListener("click", (event) => {
	const value = textarea.value;
	const output = new SpeechSynthesisUtterance(value);
	window.speechSynthesis.speak(output);

	output.addEventListener("end", () => {
		textarea.focus();
	});
});

clearButton.addEventListener("click", (event) => {
	const value = textarea.value;
	textarea.value = "";
});
