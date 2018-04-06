function recurse(num) {
	if (num == 0) return 0;
	return num + ' ' + recurse(num-1); 
}

console.log(recurse(20));  // 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0