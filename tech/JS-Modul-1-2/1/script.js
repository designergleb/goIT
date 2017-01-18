var a = prompt('Введите число которое вы хотите возвести в степень', 0);
var b = prompt('Введите степень, на которую вы хотите возвести число ' + a, 0);
var n = a; //Переменная-контейнер для циклического перемножения

function result() {
	console.log('Результат возведения ' + a + ' в степень ' + b + ' равен ' + n);
}

function count() {
	b = Number(b);

	if (isNaN(b)) {
		console.log('Неверное введены значения. Пожалуйста, введите цифры');
	} else if (b < 0) {
		for (var i = b; i < 0 - 1; i++) {
			n = (n * Number(a));
			console.log(a);
		}
		n = 1 / n;
		result();
	} else if (b > 0) {
		for (var i = 0; i < b - 1; i++) {
			n = n * Number(a);	
			console.log(a);
		} 
		result();
	} else if (b == 0) {
		n = 1;
		result();
	}
}

count();
