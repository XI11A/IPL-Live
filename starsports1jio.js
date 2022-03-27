(function () {
    var video = document.querySelector('#player');
  
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource('http://qqtv.nl:8080/Trevor/123456/30629');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
    }
    
    plyr.setup(video);
  })();
