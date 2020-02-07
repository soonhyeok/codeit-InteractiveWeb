function scrollHandler() {
  	if ($(window).scrollTop() >= $('.about').position().top) {
  		$('.menu-right button').css('color', '#4A4A4A');
	} else {
      	$('.menu-right button').css('color', 'white');
    }
}

$(window).on('scroll', scrollHandler);