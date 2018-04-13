var htmlSource = document.body.innerHTML;
var linkRegex = /"magnet:\?([^"].)+"/g;
var nameRegex = /dn=(([^&].)+)/gi;

var links = [];
var magnetLinks = htmlSource.match(linkRegex);
for (var i = 0; i < magnetLinks.length; i++) {
	var magnetLink = magnetLinks[i].replace(/"/g, '');
	var linkDecode = decodeURIComponent(magnetLink);
	var titleLink = nameRegex.exec(linkDecode)[1];

	links.push({
		title: titleLink,
		link: magnetLink
	});
}

links;
