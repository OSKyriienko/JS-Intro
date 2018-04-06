function nonRepeat(str) {
	var arr=[];  // масив, де зберігаєм зміні, які вже зустрічались
	for (var i = 0; i< str.length; i++ ) {
		if ((str.indexOf(str[i]) != -1) && arr.indexOf(str[i]) === -1) {
			if (str.indexOf(str[i],i+1) === -1) {
				return str[i];  //якщо змінна відсутня в рядку і до того не зустрічалась - це змінна, яку шукаємо
			}	
			else arr.push(str[i]);
		}
	}
}

console.log(nonRepeat('abacddbec'));  // e
  
