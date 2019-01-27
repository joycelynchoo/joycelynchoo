$(document).ready(function() {
	
	var classes = ['.bg-image-1', '.bg-image-2', '.bg-image-3', '.bg-image-4'];
	var active = 0;

	window.setInterval(function() {
		var prev = active;

		if (active >= classes.length - 1) {
			active = 0;
		} else {
			active += 1;
		}

		$(classes[prev]).addClass('hidden');
		$(classes[active]).removeClass('hidden');

	}, 4000);
});