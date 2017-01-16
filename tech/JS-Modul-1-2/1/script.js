var a = prompt('Введите число которое вы хотите возвести в степень', 1);
var b = prompt('Введите степень, на которую вы хотите возвести число ' + a, 1);
var arr = new Array;
var result = a;

function count() {
  for (var i = 0; i < b; i++) {
    arr[i] = a;
  } 
  for (var i = 0; i < b - 1; i++) {
  	var num = arr[i].toString();
  	result = result * Number(num);
  }
  console.log('Результат возведения ' + a + ' в степень ' + b + ' равен ' + result);
}

count();