function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on github</p>",
"<p onClick=nextLine(2)>So many pull requests she did snub</p>",
"<p onClick=nextLine(3)>So I forked the repo</p>",
"<p onClick=nextLine(4)>Now they all send <em>me</em> changes, d'oh!</p>",
"<p onClick=nextLine(5)>Said the maintainer, 'Welcome to the club!'</p>",
"<p onClick=nextLine(0)>(Click to advance.)</p>");

	if(line < 6) {
		document.getElementById("line").innerHTML=poem[line];
	}
	else {
		document.getElementById("line").innerHTML=poem[0];
	}
}

