function pair(arr) {
	var res = [];
	for (var i = 0; i<arr.length; i++) {
		if (!(arr[i] % 2)) {
			res.push(arr[i]);
		}
	}
	return res;
}

console.log(pair([1,5,23,4,2,5,6]));   //[4,2,6]