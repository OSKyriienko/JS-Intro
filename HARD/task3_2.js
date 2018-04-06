function validate(keys,obj) {
	var res = []; // масив, де фіксуєм присутінсть ключа за допомогою змінної FLAG (TRUE присутній, FALSE - ні)
	flag = false;
	keys.forEach(function(elem) {
		for (var item in obj) {
			if (elem === item) flag = true; 
		}
		res.push(flag); // фіксуєм присутність після того як пройшлись по об'єкту
		flag = false;
	});	
	for (var i = 0; i<keys.length; i++) {
		if (!res[i]) console.error(`key ${keys[i]} wasn't passed in object`);
	}
}

validate(["name","surname","age","job"], {name:"Roman",surname:"Rodomansky"});
//"key age wasn't passed in object"
//"key job wasn't passed in object"