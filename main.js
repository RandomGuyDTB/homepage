/*
	these code snippets stolen from
	https://www.w3schools.com/js/js_cookies.asp
*/
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while(c.charAt(0) == ' ') c = c.substring(1);
		if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
/* end stolen code; */

function setStyling(sheet) {
	document.getElementById('styling').setAttribute('href', sheet);
	return sheet;
}
function initialize(void) {
	/*
~~this can be local because the page that changes this (index.html) won't read it~~
- NOPE, it needs to be read in order to be able to apply the choice to the cookie.
if `sheet` needs to be read on a page copy this verbatim rather than using the function
	*/
	var sheet = getCookie('sheet');
	if(sheet != '') setStyling(sheet);
}