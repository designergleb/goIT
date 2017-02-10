var quiz = {
	structure: function() {
		var div = document.createElement('div');
		var form = document.createElement('form');
		var h1 = document.createElement('h1');
		var button = document.createElement('button');

		div.className = "wrapper";
		document.body.appendChild(div);
		div.appendChild(form);
		form.appendChild(h1);
		h1.innerHTML = 'Тест по программированию';

	    for (var i = 1; i < 4; i++) {

			var fieldset = document.createElement('fieldset');
			var legend = document.createElement('legend');
			var ul = document.createElement('ul');

			form.appendChild(fieldset);
			fieldset.appendChild(legend);
			fieldset.appendChild(ul);

			legend.innerHTML = i + '.' + ' Вопрос №' + i;
			
			for (var j = 1; j < 4; j++) {

				var li = document.createElement('li');
				var input = document.createElement('input');
				var label = document.createElement('label');

				ul.appendChild(li);
				li.appendChild(input);
				li.appendChild(label);
				input.type = 'checkbox';
				input.id = 'q' + i + '-a' + j;
				input.value = 'cb-' + j;
				label.innerHTML = 'Вариант ответа №' + j;
				label.for = 'q' + i + '-a' + j;
			}
		}
		
		form.appendChild(button);
		button.innerHTML = 'Проверить мои результаты';
		button.name = 'button';
	}
};

quiz.structure();

