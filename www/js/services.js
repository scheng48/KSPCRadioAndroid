angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'DJ Casserole',
    DOW: 'Sunday'
  }, {
    id: 1,
    name: 'DJ Shasta',
    DOW: 'Monday'
  }, {
    id: 2,
    name: 'Dj R.S.K',
    DOW: 'Tuesday'
  }, {
    id: 3,
    name: 'DJ Dadrock',
    DOW: 'Wednesday'
  }, {
    id: 4,
    name: 'DJ Shining',
    DOW: 'Thursday'
  }, {
    id: 5,
    name: 'The British Operative',
    DOW: 'Friday'
  }, {
    id: 6,
    name: 'DJ Mirajj',
    DOW: 'Saturday'
  }];

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



