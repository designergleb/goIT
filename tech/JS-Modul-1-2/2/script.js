var a;
var b = 2;
var arr = new Array;

 for (var i = 1; i < b; i++) {
   arr[i] = prompt('Для заполнения базы данных введи имя одного из пользователей');
 } 

function count() {
  a = prompt('Введите имя пользователя');
  for (var i = 1; i < b; i++) {
  	if (a = arr[i]) {
  		alert( a + ' вы успешно вошли' );
  	} else {
  		alert( 'Извините, такого имени в базе данных нет' );
  	}
  }
}

count();