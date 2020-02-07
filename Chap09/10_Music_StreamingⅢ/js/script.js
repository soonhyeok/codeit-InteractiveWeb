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

$(window).on('scroll', showTopBtn);

function showTopBtn() {
  if ($(window).height() + $(window).scrollTop() == $(document).height()) {
    $(".to-top-btn").fadeIn(1000);
  } else {
    $(".to-top-btn").fadeOut(1000);
  }
}

$('.to-top-btn').on('click', scrollUpBtn);

function scrollUpBtn() {
  $('html, body').animate({scrollTop : 0}, 1000)
}