HTMLElement.prototype.getZIndex = function () {
	if (this) {
		var z = window.document.defaultView.getComputedStyle(this).getPropertyValue('z-index');
		return Number(z);
	}
};

var htmlNodes = document.querySelectorAll('body>*');

for (var i = 0; i < htmlNodes.length; i++) {
	var zIndex = htmlNodes[i].getZIndex();
	if (zIndex && zIndex > 100) {
		htmlNodes[i].remove();
	}
}

document.body.style.overflow = 'auto';
