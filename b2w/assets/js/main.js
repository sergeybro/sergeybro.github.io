$(function() {

	// Cache the window object
	var $window = $(window);

	// Parallax effect for #Hero
	$('section[data-type="background"]').each(function() {

		var $bgobj = $(this);

		$($window).scroll(function() {

			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			var coords = '50% ' + yPos + 'px';

			$bgobj.css({ backgroundPosition: coords });
		});
	});
});