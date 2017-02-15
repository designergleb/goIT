function _create(name) {
			return document.createElement(name);
		}

var quiz = {
	structure: function() {
		
		var div = _create('div');
		var form = _create('form');
		var h1 = _create('h1');
		var button = _create('button');

		div.className = "wrapper";
		document.body.appendChild(div);
		div.appendChild(form);
		form.appendChild(h1);
		h1.innerHTML = 'Тест по программированию';

	    for (var i = 1; i < 4; i++) {

			var fieldset = _create('fieldset');
			var legend = _create('legend');
			var ul = _create('ul');

			form.appendChild(fieldset);
			fieldset.appendChild(legend);
			fieldset.appendChild(ul);

			legend.innerHTML = i + '.' + ' Вопрос №' + i;
			
			for (var j = 1; j < 4; j++) {

				var li = _create('li');
				var input = _create('input');
				var label = _create('label');

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

