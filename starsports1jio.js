(function () {
  var mpd = "http://qqtv.nl:8080/Trevor/123456/30629",
      dash = dashjs.MediaPlayer().create(),
      video = document.querySelector('#player');

  dash.initialize(video, mpd, true);

  plyr.setup(video);
})();
