function binarySearch(number, obj) {
	var result = [];
	var down = obj.from, num = up = obj.to;
	while (true) {
		if (num === number) return result;
		if (num > number) {
			up = num;
		} else down = num;
		num = Math.round((up + down)/2);
		result.push(num);
	}
	return result;
}

console.log(binarySearch(27, {from:0, to:100}));  //[50, 25, 38, 32, 29, 27]