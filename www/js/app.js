// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.cloud', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $ionicPush, Days, DirectoryService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $ionicPush.register().then(function(t) {
      return $ionicPush.saveToken(t);
    }).then(function(t) {
      console.log('Token saved:', t.token);
    });

    DirectoryService.initDB();

    DirectoryService.getLastUpdated().then(function(updatedAt) {

      if (shouldUpdate(updatedAt)) {
        console.log("Updating...");
        updateDaySchedule(DirectoryService, Days.all());
      }
    }).catch(function(err) {
      console.log("Storing...");
      var days = Days.all();
      for (var i = 0; i < days.length; i++) {
        storeDaySchedule(DirectoryService, days[i]);
      }
    });

  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicCloudProvider) {

  $ionicCloudProvider.init({
    'core': {
      'app_id': 'e29bb433'
    },
    "push": {
      "sender_id": "SENDER_ID",
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
        },
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('djprofile', {
    url: '/djprofile',
    abstract: true,
    templateUrl: 'templates/djprofile.html'
  })

  .state('chatroom', {
    url: '/chatroom',
    abstract: true,
    templateUrl: 'templates/chatroom.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('djprofile.djprofile-detail', {
    url: '/djprofile-detail',
    views: {
      'djprofile-djprofile-detail': {
        templateUrl: 'templates/djprofile-detail.html',
        controller: 'DJProfileDetailCtrl'
      }
    }
  })

  .state('tab.playlist', {
      url: '/playlist',
      views: {
        'tab-playlist': {
          templateUrl: 'templates/tab-playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

  .state('tab.directory', {
    url: '/directory',
    views: {
      'tab-directory': {
        templateUrl: 'templates/tab-directory.html',
        controller: 'DirectoryCtrl'
      }
    }
  })

  .state('tab.directory-detail', {
    url: '/directory/:dayId',
    views: {
      'tab-directory': {
        templateUrl: 'templates/directory-detail.html',
        controller: 'DirectoryDetailCtrl'
      }
    }
  })

  .state('tab.favorites', {
    url: '/favorites',
    views: {
      'tab-favorites': {
        templateUrl: 'templates/tab-favorites.html',
        controller: 'FavoriteCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
