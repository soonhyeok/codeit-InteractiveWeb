scrollHandler();

$(window).on('scroll', scrollHandler)

function scrollHandler() {
	$('.playlist').each(function() {
  		var windowBottom = $(window).scrollTop() + $(window).height();
		if ($(this).position().top + $(this).outerHeight() < windowBottom) {
      		$(this).animate({'opacity': '1'}, 1000);
    	}
	});
}
