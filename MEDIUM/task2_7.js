function rand(up, low) {
	var int = Math.floor(Math.random()*up) + low;
	return int;
}

console.log(rand(20, 1));  //18
console.log(rand(20, 1)); //1 
console.log(rand(20, 1)); //12
console.log(rand(20, 1)); //20
console.log(rand(20, 1)); //6
console.log(rand(20, 1)); //2
console.log(rand(20, 1)); //4
 
