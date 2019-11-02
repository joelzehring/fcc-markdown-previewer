/* by Matthew Carpenter */
console.log(`--------------------------------------------------------------------------------`);
console.log(`Come check out my LinkedIn: https://www.linkedin.com/in/matthewcarpenter22`);
console.log(`See my current projects on GitHub: https://www.github.com/getHashSet`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`launching ./resources/javascript/app.js...`);
$( document ).ready(function() {
  console.log(`app.js ready!`);
    /* ----- Code Start ----- */

	/* : When my markdown previewer first loads, the default text in the #editor field should
	 contain valid markdown that represents at least one of each of the following elements: a
	  header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, 
		a blockquote, an image, and bolded text. */

	let editorText =
`# Try Markdown!
## It's an awesome way to write HTML!

If I could interview myself, I would agree:
> Markdown **really** is awesome!

- It's fast
- It's widely recognized
- It's nerdy

Markdown is great for writing about code:
\`<div>This is a line of code</div>\`

    <div>
      <p>This is a block of code</p>
    </div>

You can learn more about me at [my site](https://joelz.me)!

![Portrait of Joel](https://lh3.googleusercontent.com/rjcP8un4RKFcOdcSUpZ65UTtI-S_Q_EkszQsbUzchrf2FWt9eYZQmycxrN-gzvqGVQLrkyxlurzIy6PnvViKnbMfc2XBbiHDebL29GFmzwpCWoOhhL5Z2z0e3vZ4jkZbwNQRwJASQKUi__EWHbgyaOkjxhF0Z-CeOdqQesdo1LA1TvMtwa12KHWVbuK9vx8249WYOtPo7nEQmtdNLxufT0-d0mhG5PbZQoY7I-rU5bLzuUWDUfhMC1riT9P0LHoKCgG7FX1E079-vlt2eUT3af5XbYthayFcoip5vFQOa2JJl72Q1I79WDtc-tswBabv3rdVQy6OoISDMFwH47UdRKSkNDVUwpHOQxsIJAqy8Qcozovqrj8Xno4RaH1iYZ9jTVXnELACerTmi8nrAXmzmfY3LXhU6QJTu6Vfa7F5H_T0zL9Mhug76WN6QlVxj-ax9686IRnez26x9Lnl8ubUaGlup9ZrYAD0qa-yfi7MkqeRjzKvcKMENpIm6qe8kWK7622DUV1WEP1fSNJi3Jv-efiuLkkLx2TCzCUg2VeHK57tcOGHhpf8WLwpaz7JKsSjaD5twG_lAIGkxknwKs01RHHPejwTLVnC_6rXfR10tiVByf3X4ojJhBxmei7JVQHX5szKbjbjYSfXh42IJZvdLnlQnz7iHFsBYLbICMpZSuwrxPSEeuFm9ox304UZT4aEb1ZoCuwtJDu54Q-qilU76oc8rn3M7ae6zpvShohm-q1huHepSw)
`

	let previewText = marked( editorText, {gfm: true, breaks: true} );

	$("#editor").text( editorText );
	$("#preview").html( previewText );

	$("#editor").keyup( function() {
		editorText = $("#editor").val();
		$("#preview").html( marked( editorText, {gfm: true, breaks: true} ) );
	});

    /* ------ Code End ------ */
});
console.log(`loading...`);