function duplicate(array) {
	var result = [] 
	var temp = [];  //тимчасовий масив для фіксування всіх перебраних елементів на поточний момент
	array.forEach(function(elem) {
		if (temp.indexOf(elem) != -1) {
			if (result.indexOf(elem) === -1) result.push(elem); //якщо дублюючий елемент вже є в масиві, то другий раз не заносимо
		}
		temp.push(elem);
	});
	return result;
}

console.log(duplicate([11,2,54,22,43,43,-1,2,43,2,5,7,8,9,22,2,6])); //[43, 2, 22]