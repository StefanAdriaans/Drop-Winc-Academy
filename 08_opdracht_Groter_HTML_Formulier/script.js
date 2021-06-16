
var fileInput = document.querySelector('input[type=file]');
var filenameContainer = document.querySelector('#filename');

fileInput.addEventListener('change', function () {
	filenameContainer.innerText = fileInput.value.split('\\').pop();

	});
