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

![Markdown logo](https://en.wikipedia.org/wiki/Markdown#/media/File:Markdown-mark.svg)
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
