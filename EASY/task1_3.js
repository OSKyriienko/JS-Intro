function average(arr) {
	 var result = 0;
	 arr.forEach(function(elem) {
	 	result += elem;
	  })
	 result = (result/arr.length).toFixed(2);
	 return result;
}

console.log(average([1,4,2]));