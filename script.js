let inputField = document.getElementById('fname');

inputField.addEventListener('blur', () => {
	inputField.value = inputField.value.toUpperCase();
});