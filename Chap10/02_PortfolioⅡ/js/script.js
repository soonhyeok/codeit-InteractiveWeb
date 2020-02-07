function scrollHandler() {
  	if ($(window).scrollTop() >= $('.about').position().top) {
  		$('.menu-right button').css('color', '#4A4A4A');
	} else {
      	$('.menu-right button').css('color', 'white');
    }
}

$(window).on('scroll', scrollHandler);

$('#about-btn').on('click', toAbout);
$('#contact-btn').on('click', toContact);

function toAbout() {
	$('html, body').animate({scrollTop : $('.about').position().top}, 1000);
}

function toContact() {
	$('html, body').animate({scrollTop : $('.contact').position().top}, 1000);
}