var data = {}; //object with user names
var b = 5; //number of names

function login() {
	a = prompt('Введите имя пользователя', 'User name');
	check();
}

function check() {
	for (key in data) {
		if (data[key] == a){
			alert( a + ' вы успешно вошли' );
			return;
		}
	}
	alert( 'Извините, такого имени в базе данных нет' );
	login();
}

function database() {
	for (i = 0; i < b; i++) {
		data[i] = prompt('Для заполнения базы данных введи имя одного из пользователей', 'User name');
	} 
	login();
}

database();