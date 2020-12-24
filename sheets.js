// Depends on cookies.js

/*
	SHEETS.JS
	PUBLIC DOMAIN CODE BY DEVEN BLAKE

	setStyling(sheet) sets the stylesheet to the file at sheet.
	e.g. setStyling("sheet.css") will change the stylesheet to "sheet.css"
	initializesheets() just sets the sheet to the sheet in the cookie, if
	the user saved their preferences.
	Needs a <LINK HREF="" ID="styling" REL="stylesheet" /> somewhere on the
	page in order to work.

	You can use setStyling("") to reset it.
*/

/*
	www.trinity.moe
	has the following (useful) stylesheets:

	/calebmode.css - dark mode (#FFF on #000)
	/givemerights.css - 2019 site theme
	/windowsclassic.css - 2020 site theme;
		based on "Windows Classic" Microsoft Windows theme
*/

window.setStyling = function(sheet) {
	document.getElementById('styling').setAttribute('href', sheet);
	return sheet;
};

window.initializesheets = function() {
	var sheet = window.getCookie('sheet');
	if(sheet != '') window.setStyling(sheet);
};
