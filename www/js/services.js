angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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

// .factory('RecentTen', function() {
//     var recentTen;
//     return {
//         all: function() {
//             spinitron.getSongs({ When: 'now', Num: 5}, function (error, response) { 
//                 console.log(response.results);  
//                 return response.results;
//             });
//         },
//         get: function(num) {
//             spinitron.getSongs({ When: 'now', Num: 5}, function (error, response) {   
//                 recentTen = response.results;
//                 return recentTen[num];
//             });
//         }
//     }
// })

.factory('Shows', function (spinitron) {
    return {
      all: function() {
        spinitron.getRegularShowsInfo({ When: 'now', Num: 5 }, function (error, response) {
          console.log(response.results);
          return response.results; // sort by string of timestamp start?
        });
      },
      get: function(num) {
        spinitron.getRegularShowsInfo({ When: 'today'}, function (error, response) {
          console.log(response.results);
          return response.results[num];
        });
      }
    }
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



