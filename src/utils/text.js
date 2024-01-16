function trimAround(str, char="") {
	str.split(char).filter((_) => _).join(char);
}

function trimHTMLWhitescape(str) {
	let result = trimAround(str, "<br>"); // remove the new line character in HTML
	result = trimAround(result, "&nbsp;"); // remove the space character in HTML
	return result;
}