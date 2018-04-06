var line;
var star = '*';
var number = +prompt('Enter number of lines');

for (var i = 0; i<number; i++) {
	line = '*';
	for (var j = 0; j < i; j++) {
		line +='*';
	}
  console.log(line);
}
