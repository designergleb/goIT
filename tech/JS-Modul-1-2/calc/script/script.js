var num = prompt('Введите число которое вы хотите возвести в степень', 0);
var degree = prompt('Введите степень, на которую вы хотите возвести число ' + num, 0);
var n = num; //Переменная-контейнер для циклического перемножения

function result() {
	console.log('Результат возведения ' + num + ' в степень ' + degree + ' равен ' + n);
}

function count(a, b) {

	if (isNaN(a) || isNaN(b)) {
		console.log('Неверное введены значения. Пожалуйста, введите цифры');
	} else if (b < 0) {
		for (var i = b; i < 0 - 1; i++) {
			n = n * a;
		}
		n = 1 / n;
		result();
	} else if (b > 0) {
		for (var i = 0; i < b - 1; i++) {
			n = n * a;	
		} 
		result();
	} else if (b == 0) {
		n = 1;
		result();
	}
}

count(num, degree);
