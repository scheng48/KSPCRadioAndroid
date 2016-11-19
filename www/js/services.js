angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'DJ Casserole',
    show: 'TGIF: The Great Indie Fix',
    genre: 'Underground',
    time: '8:00AM-10:00AM',
    day: 'Friday',
    description: 'Wake up Friday mornings with indie rock and pop, this year featuring more jazz and world music. A veritable ~casserole~ of genres, beats, and maybe a vegetable or two.'
  }, {
    id: 1,
    name: 'DJ Shasta',
    show: 'Club ASMR',
    genre: 'Electronic',
    time: '10:00AM-12:00PM',
    day: 'Friday',
    description: ''
  }, {
    id: 2,
    name: 'Dj R.S.K',
    show: 'Super Power Double Hour',
    genre: 'Underground',
    time: '12:00PM-2:00PM',
    day: 'Friday',
    description:''
  }, {
    id: 3,
    name: 'DJ Dadrock',
    show: 'Unlimited Intimacy',
    genre: 'Underground',
    time: '2:00PM-4:00PM',
    day: 'Friday',
    description: 'floating in the sea of gauzy techno and noise'
  }, {
    id: 4,
    name: 'DJ Shining',
    show: 'The Seabed',
    genre: 'Underground',
    time: '4:00PM-6:00PM',
    day: 'Friday',
    description: ''
  }, {
    id: 5,
    name: 'The British Operative',
    show: 'The Weekend Warmup',
    genre: 'Electronic',
    time: '6:00PM-8:00PM',
    day: 'Friday',
    description: '2 hours of the best House & Dance tunes to get you ready for the weekend. Whether you are on your commute home or getting ready for a night out, turn it up and dance like no one is watching.'
  }, {
    id: 6,
    name: 'DJ Mirajj',
    show: 'Escape from Heaven',
    genre: 'Underground',
    time: '8:00PM-10:00PM',
    day: 'Friday',
    description: 'analog and modular synthesizer music https://www.facebook.com/SynthdactylProgram/'
  }, {
    id: 7,
    name: 'Taylor',
    show: 'Touch of Evil',
    genre: 'Specialty',
    time: '10:00PM-1:00AM',
    day: 'Friday',
    description: 'A morbid menagerie of past and future metal classics melded into a chaotic cacophony of sinister sounds for bleeding ears. Death is no escape here; in fact, it\'s where we begin our journey. This ride stops at Maiden, Mayhem, Melvins, Meshuggah, and all points in between. So climb aboard and put your horns, and the volume, way up. https://www.facebook.com/pages/KSPC-Touch-Of-Evil/246067017172'
  }, {
    id: 8,
    name: 'Skip Svoboda',
    show: 'PolkA to Z',
    genre: 'Specialty',
    time: '8:00AM-11:00AM',
    day: 'Saturday',
    description: 'Tune in for 3 hours of Polkas and Waltzes from Europe and all over the United States.'
  }, {
    id: 9,
    name: 'DJ TSP',
    show: 'Lunch On, Lunch Off',
    genre: 'Underground',
    time: '11:00AM-1:00PM',
    day: 'Saturday',
    description: ''
  }, {
    id: 10,
    name: 'Ike Rhythm',
    show: 'Deserving Soul',
    genre: 'Specialty',
    time: '1:00PM-3:00PM',
    day: 'Saturday',
    description: 'That pulsing backbeat, the blasting horns, the churchy organ, the impassioned vocals - it\'s all here in Soul from the South, the North, the big city, The backwoods juke-joint and all points in between... it\'s Deserving Soul for your mind, body, and pleasure. With your host, Ike Rhythm.'
  }, {
    id: 11,
    name: 'Larry the Fox',
    show: 'All that Jazz',
    genre: 'Jazz',
    time: '3:00PM-5:00PM',
    day: 'Saturday',
    description: 'All kinds of cookin\' jazz like straight-ahead, a smattering of Dixieland, Memphis, Chicago, New Orleans styles & some Zydeco. With a sprinklin’ of jazz-fusion, smooth jazz, Latin jazz, free jazz, and some blues. Plus jazz-related vocals.Occasional interviews with interesting guests from the Jazz World.'
  }, {
    id: 12,
    name: 'Nefrettiti',
    show: 'Merry Go Round',
    genre: 'Specialty',
    time: '5:00PM-7:00PM',
    day: 'Saturday',
    description: 'Earthly to Heavenly Tunes featuring a Fancy Fusion of Genres: Afro-Beat, Blues, Soul-Jazz-Funk, Rock, Reggae, Electro-BreakBeat-House & Nerd-Hop...that\'s right Nerd-Hop!'
  }, {
    id: 13,
    name: 'Fifi LaRoux',
    show: 'Le Show',
    genre: 'Specialty',
    time: '7:00PM-9:00PM',
    day: 'Saturday',
    description: 'French music, from the classique to the moderne! C\'est très chic. http://djfifilaroux.tumblr.com'
  }, {
    id: 14,
    name: 'DJ Zomb-E',
    show: 'Post Apocalypse',
    genre: 'Specialty',
    time: '9:00PM-11:00PM',
    day: 'Saturday',
    description: 'A mix of specialty underground music old, new, rare, and the overlooked from genre to genre and place to place. Usually with a theme. Also features local and live music and interviews including episodes of Feminindustry.'
  }, {
    id: 15,
    name: 'DJ Cynic',
    show: 'Zippity Doomsday',
    genre: 'Underground',
    time: '11:00PM-1:00AM',
    day: 'Saturday',
    description: ''
  } ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

// fake testing data for playlists
.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    song: 'a Brand New Day',
    artist: 'V/A',
    art: 'img/ben.png',
  }, {
    id: 1,
    song: 'The Seasons Die One After Another',
    artist: 'amazarashi',
    art: 'img/ben.png'
  }, {
    id: 2,
    song: 'First Family on the Moon - Side 1',
    artist: 'The Jetsons',
    art: 'img/ben.png'
  }, {
    id: 3,
    song: 'My Funny Valentine',
    artist: 'Brook Benton',
    art: 'img/ben.png'
  }, {
    id: 4,
    song: 'Bub',
    artist: 'Majestic',
    art: 'img/ben.png'
  }];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
});



