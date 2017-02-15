var data = new Array(); //object with user names
var b = 5; //number of names

function login() {
	a = prompt('Введите имя пользователя', 'User name');
	check();
}

function check() {
	for (i = 0; i < data.length; i++) {
		if (data[i] == a){
			alert(a + ' вы успешно вошли' );
			return;
		}
	}
	alert( 'Извините, такого имени в базе данных нет' );
	login();
}

function database() {
	for (i = 0; i < b; i++) {
		data[i] = prompt('Для заполнения базы данных введи имя одного из пользователей', 'User name');
		if (event.keyCode == 27) {
			return;
		}
	} 
	login();
}

database();