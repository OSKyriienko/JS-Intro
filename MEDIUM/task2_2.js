function reverseStr(str) {
	var newStr = '';
	for (var i =0; i< str.length; i++ ) {
		newStr += str[str.length - 1 - i];
	}
	return newStr;
}

console.log(reverseStr('hello world'));
 
/* 
function reverseStr(str) {
	return str.split('').reverse().join('');
}	
*/