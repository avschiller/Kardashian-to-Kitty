walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	// v = v.replace(/\bThe Cloud\b/g, "My Butt");
	// v = v.replace(/\bThe cloud\b/g, "My butt");
	// v = v.replace(/\bthe Cloud\b/g, "my Butt");
	// v = v.replace(/\bthe cloud\b/g, "my butt");

	v = v.replace(/\bKardashian\b/g, "Kitty");
	v = v.replace(/\bkardashian\b/g, "kitty");
	
	v = v.replace(/\bKim Kardashian\b/g, "Kitty Kat");
	v = v.replace(/\bkKourtney Kardashian\b/g, "Meow Kitty");
	v = v.replace(/\bKhloe Kardashian\b/g, "Purrrrr Kitty");
	v = v.replace(/\bKhloé Kardashian\b/g, "Purrrrr Kitty");
	
	textNode.nodeValue = v;
}


