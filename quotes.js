window.initializequotes = function() {
	window.quotes = [
		[ "Yeah, that's just how it is. Just, nothing. So much nothing that it hurts.",
			"danger/u/ aefd79" ],
		[ "Reason has always existed, but not always in a reasonable form.",
			"Katy Perry" ],
		[ "Consult your pineal gland.",
			"Eris" ],
		[ "Back to 8chan please",
			"Skyglider" ],
		[ "No, I am your father.",
			"Darth Vader" ],
		[ "A checklist can aid here.",
			"Lance Leventhal" ],
		[ "Special thanks to Ками for their help adding quotes to this page.",
			"Deven Blake" ]
	];
	window.quote = 0;
}

window.setStyling = function(sheet) {
	document.getElementById('styling').setAttribute('href', sheet);
	return sheet;
};

window.genQuote = function() {
	if(window.quote) window.quotes.push(window.quote);
	quoteindex = Math.floor(Math.random() * window.quotes.length);
	window.quote = window.quotes.splice(quoteindex, 1);
	console.log("Quote set to:");
	console.log(window.quote);
	console.log(window.quotes);
	document.getElementById('quote').textContent = '\"' + window.quote[0] + '\"';
	document.getElementById('quoteauthor').textContent = '~ ' + window.quote[1];
	document.getElementById('getaquote').setAttribute('value', 'Get another free quote today!');
};
