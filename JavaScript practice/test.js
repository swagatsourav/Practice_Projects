function displayDiv(){
	var div_s = document.querySelector('div');
	div_s.style.display="block";
}

	var news = document.querySelector('li a:not(.active)');
	news.onclick = displayDiv;
