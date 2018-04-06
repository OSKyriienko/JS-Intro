function bubble(arr) {
	var temp;
	var flag; //ознака чи в рядку були переміщення елементів
	for (var i = 0; i < arr.length; i++) {
		flag = 0;
		for (var j = 0; j < arr.length - 1 - i; j++ ) {
			if (arr[j]<arr[j+1]) {
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				flag = 1;
			}
		}
		if (!flag) return arr; //якщо переміщень нема - вихід з функції -> вже все відсортоване
	}
	return arr;
}

console.log(bubble([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); //[3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]