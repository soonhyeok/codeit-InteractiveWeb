scrollHandler();

$(window).on('scroll', scrollHandler);

function scrollHandler() {
  var windowBottom = $(window).scrollTop() + $(window).height();
  var playlists = $('.playlist')
  for (var i = 0; i < playlists.length; i++) {
    var playlist = $(playlists[i]);
    var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
    
    if (playlistHalf < windowBottom) {
    	playlist.animate({'opacity': '1'}, 1000);
    }
  }
}