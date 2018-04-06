function pythagorean(a,b,c) {
	if (a*a + b*b === c*c) {
		console.log ('Triangle is right');
	}	
	else {
		console.log ("Triangle isn't right");
	}
}

pythagorean(3,4,5);  //"Triangle is right"
pythagorean(3,6,5);  //"Triangle isn't right"