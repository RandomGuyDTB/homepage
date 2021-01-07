/*
	quotes.js
	PUBLIC DOMAIN. CODED BY DEVEN BLAKE WITH HELP FROM КАМИ ON DISCORD.

	To use
		* add two P elements with the IDs "quote" and "quoteauthor" respectively
		* call window.initializequotes() on page load.
		* use window.genQuote() to get a new quote.
*/

// comments exhaustive because i hate working in JS

/*
	Will set window.quotes to the list of quotes and window.quote to 0 (to
	indicate a quote hasn't yet been generated).

	window.quotes is a list of quotes and each quote is itself a list with
	[ quote, author ]. Kinda sucks that it has to load like (what could be)
	a huge list every time the page loads but I (like most webdevs) am lazy
	and It Works How It Is.
*/
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
			"Deven Blake" ],
		[ "You never know.",
			"Mr. McSweeney" ],
		[ "You lost the game.",
			"Anonymous" ],
		[ "Have you tried turning your computer off and on again?",
			"Pre-historic phrase" ],
		[ "Jerma isn't particularly religious.",
			"Jerma985 Wikitubia Fandom article" ],
		[ "Swag.",
			"Neil Cicierega" ],
		[ "put me on here now",
			"arsonist catboy" ],
		[ "These are no longer memes this is y'all repressed anger",
			"Khalifist" ],
		[ "christmas kums early!",
			"Kum & Go official Twitter account" ],
		[ "this quote removed due to copyright infringement",
			"The MPAA" ],
		[ "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
			"Bjarne Stroustrup" ],
		[ "I'll sleep when I'm dead.",
			"Warren Zevon" ],
		[ "I would have made a good pope.",
			"Richard M. Nixon" ],
		[ "To sit alone with my conscience will be judgment enough for me.",
			"Charles William Stubbs" ],
		[ "Your enemy is where you are not.",
			"Sun Tzu (paraphrased)" ],
		[ "Be everywhere.",
			"social media influencing 101" ],
		[ "I wish everyone was bald.",
			"Anonymous" ],
		[ "Who is this?",
			"Stephen King" ],
		[ "Nah",
			"Soldier G65434-2" ],
		[ "Everything not saved will be lost.",
			"Quit screen" ],
		[ "The kill command is a basic UNIX system command.",
			"Matthew Helmke" ],
		[ "I potato you",
			"idiom" ],
		[ "If you raise the effing hot dog, I will kill you. Figure it out.",
			"Craig Jelinek" ],
		[ "Don't think. Feel and you'll be tanasinn.",
			"名無" ]
	];
	window.quote = 0;
}

/*
	You can pop this in window.onload() to generate the quote on page load
	OR make a button with onclick="window.genQuote();" to let the user get
	moar quotes.

	Will not give you the same quote twice in a row!
*/
window.genQuote = function() {
	// This text is to what the text of the button with ID="quoteButton"
	// changes when a quote is generated. Used to have it be
	// "Get a free quote today!" / "Get another free quote today!".
	ButtonActivated = "Get another free quote today!";

	// The quote currently in use.
	window.oldQuote = window.quote;

	// Get the index of the next quote we'll use in window.quotes
	quoteIndex = Math.floor(Math.random() * window.quotes.length);

	// Change the current quote to a new quote that we take out of the
	// quotes array.
	window.quote = window.quotes.splice(quoteIndex, 1)[0];

	// If there was a quote in use, let's put it back in the quotes array.
	if(window.oldQuote) window.quotes.push(window.oldQuote);

	// This is where we show the quote.
	quoteText = document.getElementById('quote');
	if(quoteText) quoteText.textContent = '\"' + window.quote[0] + '\"';

	// This is where we show the quote author.
	quoteAuthorText = document.getElementById('quoteauthor');
	if(quoteAuthorText) quoteAuthorText.textContent = '~ ' + window.quote[1];

	// Change the button text to the ButtonActivated text.
	button =  document.getElementById('quoteButton');
	if(button) button.setAttribute('value', ButtonActivated);
};
