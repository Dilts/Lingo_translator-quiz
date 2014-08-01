$(function() {
	$('.submitTranslate').on('click', function(e) {
		e.preventDefault();
		console.log('click!');

		var fromLang= .val();
		var toLang = .val();
		var translate = .val();
	})

	$.post('/translation', function(data) {
		console.log()
	})


})