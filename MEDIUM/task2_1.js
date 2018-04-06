function reverseNum(num) {
	var newNumber = num.toString().split('').reverse().join('');
	return +newNumber;
}

console.log(reverseNum(32243));  //34223


