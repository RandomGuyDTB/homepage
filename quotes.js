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

	maybe these could be loaded in from a JSON somewhere? i don't wanna do
	it if it'll drag page loading time down. already need to defer quote
	generation because the JS is so slow
*/
window.initializequotes = function() {
	window.quotes = [
		[ "Yeah, that's just how it is. Just, nothing. So much nothing that it hurts.",
			"danger/u/ aefd79" ],
		[ "Reason has always existed, but not always in a reasonable form.",
			"Katy Perry" ], // misattribution, actually from Marx
		[ "Consult your pineal gland.",
			"Eris" ],
		[ "Back to 8chan please",
			"Skyglider" ], // wirechan(?, maybe danger/u/)
		[ "No, I am your father.",
			"Darth Vader" ], // Movie; Star Wars V
		[ "A checklist can aid here.",
			"Lance Leventhal" ], // z80 book
		[ "Special thanks to Ками for their help adding quotes to this page.",
			"Deven Blake" ],
		[ "You never know.",
			"Mr. McSweeney" ], // IRL
		[ "You lost the game.",
			"Anonymous" ], // internet joke turned 4chan meme
		[ "Have you tried turning your computer off and on again?",
			"Pre-historic phrase" ],
		[ "Jerma isn't particularly religious.",
			"Jerma985 Wikitubia Fandom article" ],
		[ "Swag.",
			"Neil Cicierega" ],
		[ "put me on here now",
			"arsonist catboy" ], // Twitter (implies catboy wanted to be put on here but quote taken out of context)
		[ "These are no longer memes this is y'all repressed anger",
			"Khalifist" ], // Twitter
		[ "christmas kums early!",
			"Kum & Go official Twitter account" ], // Twitter
		[ "this quote removed due to copyright infringement",
			"The MPAA" ], // joke
		[ "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
			"Bjarne Stroustrup" ], // didn't this guy make C++?
		[ "I'll sleep when I'm dead.",
			"Warren Zevon" ],
		[ "I would have made a good pope.",
			"Richard M. Nixon" ],
		[ "To sit alone with my conscience will be judgment enough for me.",
			"Charles William Stubbs" ],
		[ "Your enemy is where you are not.",
			"Sun Tzu (paraphrased)" ], // Book; Art of War
		[ "Be everywhere.",
			"social media influencing 101" ],
		[ "I wish everyone was bald.",
			"Anonymous" ], // 4chan
		[ "Who is this?",
			"Stephen King" ], // joke(?)
		[ "Nah",
			"Soldier G65434-2" ], // video game (which one?)
		[ "Everything not saved will be lost.",
			"Quit screen" ], // found on t-shirt
		[ "The kill command is a basic UNIX system command.",
			"Matthew Helmke" ], // Book; Ubuntu Linux Unleashed 2021 Edition; pg 283
		[ "I potato you",
			"idiom" ], // Tumblr
		[ "If you raise the effing hot dog, I will kill you. Figure it out.",
			"Craig Jelinek" ],
		[ "Don't think. Feel and you'll be tanasinn.",
			"名無" ], // 2chan (hiroyki's)
		[ "They had overshadowed her in life. They would obliterate her in death.",
			"Khaled Hosseini" ], // Book; A Thousand Splendid Suns
		[ "are your bones made out of fucking depleted uranium",
			"Anonymous" ], // 4chan/x/ - tulpa peridot thread
		[ "Giving the Linus Torvalds award to the Free Software Foundation is sort of like giving the Han Solo award to the Rebel Fleet.",
			"Richard Stallman" ], // Movie; Revolution OS (2001)
		[ "Filthy Frank is the embodiment of everything a person should not be.",
			"George Miller" ], // YouTube about page
		[ "It should be noted that no ethically-trained software engineer would ever consent to write a DestroyBaghdad procedure. Basic professional ethics would instead require him to write a DestroyCity procedure, to which Baghdad could be given as a parameter.",
			"Nathaniel Borenstein" ], // wikiquote
		[ "An idiot admires complexity. A genius admires simplicity.",
			"Terry A. Davis" ], // god
		[ "When in doubt, use brute force.",
			"Ken Thompson" ], // Bumper Sticker CS
		[ "Where MS Word is WYSIWYG (What You See Is What You Get), and Latex is WYGIWYW (What You Get Is What You Want), HTML is WYGIWYD (What You Get Is What You Deserve).",
			"Anonymous" ], // me
		[ "Easy is the opposite of hard, not the opposite of time-consuming.",
			"Brad Fitzpatrick" ], // discussion about plan9 support with Go
		[ "Blame the Nazis for making me become a gun designer. I always wanted to construct agricultural machinery.",
			"Mikhail Kalashnikov" ],
		[ "since KFC fired me the 11 herbs and spices are coriander, onion powder, garlic powder, salt, white pepper, black pepper basil, parsley, chili pepper, lemon pwder, thyme, and sage.",
			"@ashley.shoy, Tiktok" ],
		[ "Sooner or later there has to be peace.",
			"Abigail Thorn" ], // Identity: A Trans Coming Out Story
		[ "Ich bin ein Berliner.",
			"John F. Kennedy" ], //some speech or something
		[ "I am a Bangor!",
			"Erwin Kreuz" ],
		[ "It's not enough that I should succeed - others should fail.",
			"Unknown" ],
		[ "Secundus says hello to his Prima, wherever she is. I ask, my mistress, that you love me.", // House and Office of Volusius Iuvencus
			"Unknown ]
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
