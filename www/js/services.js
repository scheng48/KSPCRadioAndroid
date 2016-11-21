angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    {
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
    }
  ];

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

.factory('DirectoryService', ['$q', DirectoryService]);

function DirectoryService($q) {
  var _db;
  var _shows;

  return {
    initDB: initDB,

    getAllShows: getAllShows,
    addShow: addShow,
    updateShow: updateShow,
    deleteShow: deleteShow
  };

  function initDB() {
    // Creates the database or opens it if it already exists
    _db = new PouchDB('shows');
    // TODO: use actual key and password
    var username = 'API KEY';
    var password = 'API PASSWORD';
    var remote = 'https://66e6d49c-59f9-40b7-b52b-2874ff4f02f6-bluemix.cloudant.com/shows';

    var options = {
      live: true,
      retry: true,
      continuous: true,
      auth: {
        username: username,
        password: password
      }
    };

    _db.sync(remote, options);
  };

  function addShow(show) {
    return $q.when(_db.post(show));
  };

  function updateShow(show) {
    return $q.when(_db.put(show));
  };

  function deleteShow(show) {
    return $q.when(_db.remove(show));
  };

  function getAllShows() {
    if (!_shows) {
      return $q.when(_db.allDocs({include_docs: true})).then(function(docs) {

        _shows = docs.rows

        // Listen for changes on the database
        _db.changes({live:true, since: 'now', include_docs: true})
          .on('change', onDatabaseChange);

        return _shows;
      });
    } else {
      return $q.when(_shows);
    }
  };

  function onDatabaseChange(change) {
    var index = findIndex(_shows, change.id);
    var show = _shows[index];

    if (change.deleted) {
      if (show) {
        _shows.splice(index, 1);
      }
    } else {
      if (shows && show._id == change.id) {
        _shows[index] = change.doc;
      } else {
        _shows.splice(index, 0, change.doc);
      }
    }
  };

  function findIndex(array, id) {
    var low = 0, high = array.length, mid;

    while (low < high) {
      mid = (low + high) >>> 1;
      array[mid]._id < id ? low = mid + 1 : high = mid
    }

    return low;
  };
}
