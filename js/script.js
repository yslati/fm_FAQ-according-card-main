function hideit(num) {
	document.getElementById("description" + num).style.display = "none";
	document.getElementById("title" + num).style.fontWeight = 400;
	document.getElementById("image--2").style.right = "95px";
	document.getElementById("image--2").style.top = "220px";
	document.getElementById("image").style.backgroundPosition = "-75px 70px";
	document.getElementById('fa--' + num).style.transform = "rotate(0deg)";
}

function showit(num) {
	document.getElementById("description" + num).style.display = "block";
	document.getElementById("title" + num).style.fontWeight = 600;
	document.getElementById("image--2").style.top = "205px";
	document.getElementById("image--2").style.right = "120px";
	document.getElementById("image").style.backgroundPosition = "-60px 80px";
	document.getElementById('fa--' + num).style.transform = "rotate(180deg)";
}

function checkifDisplayed(num) {
	for (let i = 1; i <= 5; i++)
		if (i != num && document.getElementById("description" + i).style.display == "block")
			hideit(i)
	showit(num)
}

function displaydes(num) {
	if (document.getElementById("description" + num).style.display != "none") {
		hideit(num);
	}
	else
		checkifDisplayed(num)
}
