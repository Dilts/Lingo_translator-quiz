$(function() {
	$('.submitTranslate').on('click', function(e) {
		e.preventDefault();
		console.log('click!');
	})

	$.post('/translation', function(data) {
		console.log()
	})


})