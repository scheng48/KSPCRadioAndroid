// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, DirectoryService) {
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

    DirectoryService.initDB();

    // DirectoryService.getAllShows().then(function(shows) {
    //   console.log(shows);
    // });
  });
})

.config(function($stateProvider, $urlRouterProvider) {

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

  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('tab.directory ', {
    url: '/directory',
    views: {
      'tab-directory': {
        templateUrl: 'templates/tab-directory.html',
        controller: 'DirectoryCtrl'
      }
    }
  })

  .state('tab.favorites', {
    url: '/favorites',
    views: {
      'tab-favorites': {
        templateUrl: 'templates/tab-favorites.html',
        controller: 'FavoritesCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
