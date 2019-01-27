$(document).ready(function() {
	var $body = $('body');

	$('.opportunity-btn').click(function() {
		$body.addClass('noscroll');
	});

	$('.close-modal').click(function() {
		$body.removeClass('noscroll');
	});
});