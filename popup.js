document.addEventListener('DOMContentLoaded', function() {
	var removeModalButton = document.getElementById('removeModal');
	var listTorrentButton = document.getElementById('listTorrent');

	removeModalButton.addEventListener('click', function() {
		chrome.tabs.executeScript(null, {file: "js/remove_modal.js"});
	}, false);

	listTorrentButton.addEventListener('click', function() {
		chrome.tabs.executeScript(null, {file: "js/list_torrent.js"}, function(links){
			var mainCont = document.getElementById('easyDown-list-cont');
			mainCont.innerHTML = "";
			links = links[0];

			if (!links || links.length == 0) {
				createItem('Não foram encontrados links');
			} else {
				for (var i = 0; i < links.length; i++) {
					createItem(links[i].title, links[i].link);
				}
			}
		});
	}, false);
}, false);

function createItem(title, link) {
	var mainCont = document.getElementById('easyDown-list-cont');
	mainCont.style.display = "block";

	var itemCont = document.createElement('div');
	itemCont.className = "easyDown-list-item";

	var itemTitle = document.createElement('div');
	itemTitle.className = "easyDown-list-item-title";
	itemTitle.innerHTML = title;
	itemTitle.setAttribute('title', title);

	itemCont.appendChild(itemTitle);

	if (link) {
		var itemLink = document.createElement('a');
		itemLink.className = "easyDown-list-item-link";
		itemLink.innerHTML = "Magnet";
		itemLink.setAttribute("target", "_blank");
		itemLink.setAttribute("href", link);

		itemCont.appendChild(itemLink);
	}


	mainCont.appendChild(itemCont);
}
