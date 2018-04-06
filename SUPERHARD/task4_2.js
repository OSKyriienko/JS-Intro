function postCheck(code) {
	var cityPostCodes = {
		'Kyiv': ['01', '02', '03', '04', '05', '06'],
		'Kyiv region': ['07', '08', '09'],
		'Zhytomyr region': ['10', '11', '12', '13'],
		'Chernigiv region': ['14', '15', '16', '17'],
		'Cherkasy region': ['18', '19', '20'],
		'Vinnytsia region': ['21', '22', '23', '24'],
		'Kirovograd region': ['25', '26', '27', '28'],
		'Khmelnytskyi region': ['29', '30', '31', '32'],
		'Rivne region': ['33','34','35'],
		'Poltava region': ['36','37','38','39'],
		'Sumy region': ['41','42','43'],
		'Volyn region':['43','44','45'],
		'Ternopil region': ['46','47','48'],
		'Dnipro region': ['49','50','51','52','53'],
		'Mykolayiv region': ['54','55','56','57'],
		'Chernivtsi region': ['58','59','60'],
		'Kharkiv region': ['61','62','63','64'],
		'Odesa region': ['65','66','67','68'],
		'Zaporizhya region': ['69','70','71','72'],
		'Kherson region': ['73','74','75'],
		'Ivano-Frankivsk region': ['76','77','78'],
		'Lviv region': ['79','80','81','82'],
		'Donetsk region': ['83','84','85','86','87'],
		'Zakarpattya region': ['88','89','90'],
		'Lugansk region': ['91','92','93','94'],
		'Crimea region': ['95','96','97','98'],
		'Sevastopol': ['99']
  	}
	var region;
	if (code.length != 5) console.log("Bad format. The Code isn\'t of Ukraine"); //Якщо не 5 цифр - то не Україна
  	else {
  		let flagCodeExist = false;
		for (var key in cityPostCodes) {
      		if (checkCodeInArray(code,cityPostCodes[key])) {
      			flagCodeExist = true;
      			region = key;
      		}	
   		}
   		if (flagCodeExist) console.log(`It's Ukrainian code. ${region}`);
   		else console.log("The Code isn\'t of Ukraine");
  	} 
}

function checkCodeInArray(code,array) {
	var flag = false;
	var codeSlice = code.toString().slice(0,2);  //перевіряєм перші 2 цифри на приналежність до регіону
	array.forEach(function(elem) {
		if (codeSlice === elem) {
			flag = true;
		}	
	});
	return flag;
}

postCheck('2292348'); //Bad format. The Code isn't of Ukraine
postCheck('99348');   //It's Ukrainian code. Sevastopol
postCheck('23348');   //It's Ukrainian code. Vinnytsia region
postCheck('56348');   //It's Ukrainian code. Mykolayiv region
postCheck('923448');  //Bad format. The Code isn't of Ukraine"
