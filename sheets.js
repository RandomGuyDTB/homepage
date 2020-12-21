// Depends on cookies.js

window.setStyling = function(sheet) {
	document.getElementById('styling').setAttribute('href', sheet);
	return sheet;
};

window.initializesheets = function() {
	var sheet = window.getCookie('sheet');
	if(sheet != '') window.setStyling(sheet);
};
