function currencyConverter(sum,val,curs) {
	var result,currency;
	if ((val === 'USD') || (val === 'usd')) {
		result = sum*curs;
		currency = 'UAH';
	}
	else {
		result = (sum/curs).toFixed(2);
		currency = 'USD';
	}
	return (`${sum} ${val} equal ${result} ${currency}`);
}

console.log(currencyConverter(100,'usd',26.5));  //"100 usd equal 2650 UAH"
console.log(currencyConverter(2000,'uah',26.5));  //"2000 uah equal 75.47 USD"