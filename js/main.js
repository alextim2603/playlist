;(function () {
  "use strict";

  var playList = [{
    author: "led zeppelin",
    song: "stairway to heaven",
    duration: "2:03"
  },
  {
    author: "queen",
    song: "bohemian rhapsody",
    duration: "2:30"
  },
  {
    author: "lynyrd skynyrd",
    song: "free bird",
    duration: "1:56"
  },
  {
    author: "deep purple",
    song: "smoke on the water",
    duration: "3:03"
  },
  {
    author: "jimi hendrix",
    song: "all along the watchtower",
    duration: "2:53"
  },
  {
    author: "AC/DC",
    song: "back in black",
    duration: "2:43"
  },
  {
    author: "queen",
    song: "we will rock you",
    duration: "2:13"
  },
  {
    author: "metallica",
    song: "enter sandman",
    duration: "3:03"
  }
  ];

     var trackList = document.querySelector('.ba-track-row');

  for (var i = 0; i < playList.length; i++) {

    var trackListAll = '<li class="ba-track">' + '<span class="ba-list-name">' + playList[i].duration + '</span>' + ' | ' + '<span class="ba-list-duration">' + playList[i].author + '</span>' + '<br>' + '<span class="ba-list-author">' + playList[i].song + '</span>' + '<span class="ba-icon">' + '</span>' +'</li>';

    trackList.innerHTML += trackListAll;
  }

})();

/*;(function(){
    "use strict";



    var playList2 = [
      'led zeppelin',
      'queen',
      'led zeppelin',
      'deep purple',
      'jimi hendrix',
      'AC/DC',
      'queen',
      'metallica'
    ];

    var songList2 = document.querySelector('.ba-playlist2');

    for (var i=0; i < playList2.length; i++){

    /*songList2.innerHTML += '<span>' + playList2[i] + '</span>';*/
/*
    }



    var playList = [
      '2:03',
      '2:30',
      '1:56',
      '3:03',
      '2:53',
      '2:43',
      '2:13',
      '3:03'
    ];

    var songList = document.querySelector('.ba-playlist');

    for (var i=0; i < playList.length; i++){

    /*songList.innerHTML += '<span>' + playList[i] + ' | ' + playList2[i] + '</span>' + '<br>';*//*

    }

    var playList3 = [
      'stairway to heaven',
      'bohemian rhapsody',
      'free bird',
      'smoke on the water',
      'all along the watchtower',
      'back in black',
      'we will rock you',
      'enter sandman'
    ];

    var songList3 = document.querySelector('.ba-playlist3');

    for (var i=0; i < playList3.length; i++){

     songList3.innerHTML += '<span>' + playList[i] + ' | ' + playList2[i] + '<br>' + playList3[i] + '</span>' + '<br>';

    }


*/
