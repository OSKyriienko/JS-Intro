function minmax(arr) {
	arr.sort(function(a,b) { return a-b; });
	return { max: arr[arr.length-1],  min: arr[0] }
}

console.log(minmax([1,92,-5,25]));  //   { max: 92, min: -5 }