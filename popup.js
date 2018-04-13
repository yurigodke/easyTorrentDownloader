document.addEventListener('DOMContentLoaded', function() {
	var removeModalButton = document.getElementById('removeModal');
	removeModalButton.addEventListener('click', function() {
		chrome.tabs.executeScript(null, {file: "js/remove_modal.js"});
	}, false);
}, false);
