var htmlSource = document.body.innerHTML;
var linkRegex = /(magnet:\?)(([^\"\'])+)/gi;
var nameRegex = /dn=(([^&].)+)/i;

var links = [];
var magnetLinks = htmlSource.match(linkRegex);

if(magnetLinks){
	for (var i = 0; i < magnetLinks.length; i++) {
		var magnetLink = magnetLinks[i];
		var linkDecode = decodeURIComponent(magnetLink);
		var titleLink = nameRegex.exec(magnetLink);

		titleLink = titleLink && titleLink[1] ? titleLink[1] : 'Download ' + i;

		links.push({
			title: titleLink,
			link: magnetLink
		});
	}
}

links;
