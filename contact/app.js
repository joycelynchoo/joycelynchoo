$(document).ready(function() {
	$('.day .day-checkbox').on('click', function() {
		var $this = $(this);
		
		$this.toggleClass('day-active');

		var $button = $(this).siblings('.time').find('input');
		if ($this.hasClass('day-active')) {
			$button.removeAttr('disabled');
		} else {
			$button.attr('disabled', 'disabled');
		}
	});
});