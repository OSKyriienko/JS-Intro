function upperCase(str) {
	var newStr = str[0].toUpperCase();
	for (var i =1; i< str.length; i++ ) {
		if ((str[i] === ' ') && (str[i+1] !== ' ')) {
			newStr += str[i] + str[i+1].toUpperCase();;
			i++;
			continue;
		}
		else newStr += str[i];
	}
	return newStr;
}

console.log(upperCase('the quick brown fox'));  // The Quick Brown Fox
 
