var htmlNodes = document.body.querySelectorAll('*');

for (var i = 0; i < htmlNodes.length; i++) {
	if (htmlNodes[i].style.zIndex > 0) {
		console.log(htmlNodes[i]);
	}
}
