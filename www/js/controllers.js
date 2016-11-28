angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, DirectoryService) {
  $scope.livestream = document.getElementById("livestream");
  $scope.playPause = function() {
    if(livestream.paused) {
      livestream.play();
      document.getElementById("play-pause").innerHTML = '<i class="icon icon ion-pause" style="color: white"></i>';
    } else {
      livestream.pause();
      document.getElementById("play-pause").innerHTML = '<i class="icon icon ion-play" style="color: white"></i>';
    }
  }

  $scope.init = function() {
    callSpinPapi();
    // DirectoryService.addShow(
    //   {"showName": "test name3",
    //   "DJName": "test DJ3",
    //   "showCategory": "test category3",
    //   "day": "test day3",
    //   "onAirTime": "05:00:00",
    //   "offAirTime": "07:00:00",
    //   "showDescription": "test description3"}
    // );
  }
})

.controller('DJProfileDetailCtrl', function($scope) {})

.controller('PlaylistCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.init = function() {
    getSchedule();
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('DirectoryCtrl', function($scope, Days) {
  $scope.days = Days.all();
})


.controller('DirectoryDetailCtrl', function($scope, $stateParams, Days, DirectoryService) {
  $scope.day = Days.get($stateParams.dayId);

  DirectoryService.getDaySchedule($stateParams.dayId).then(function(shows) {
    $scope.shows = shows.sort(compareTime);
    console.log($scope.shows);
  });

  // storeDaySchedule(DirectoryService, 0);
  // storeDaySchedule(DirectoryService, 1);
  // storeDaySchedule(DirectoryService, 2);
  // storeDaySchedule(DirectoryService, 3);
  // storeDaySchedule(DirectoryService, 4);
  // storeDaySchedule(DirectoryService, 5);
  // storeDaySchedule(DirectoryService, 6);

  //https://forum.ionicframework.com/t/accordion-list/2832/4
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('FavoritesCtrl', function($scope) {})

.controller('SocialMedia', function($scope, $cordovaAppAvailability) {

  $scope.openFacebook = function() {
    // $cordovaAppAvailability.check("fb://").then(function() {
    //     window.open('fb://KSPCOnline', '_system', 'location=no');
    // }, function() {
    // $cordovaAppAvailability.check("com.facebook.katana").then(function() {
    //     window.open('fb://KSPCOnline', '_system', 'location=no');
    // }, function() {
    //     window.open('https://www.facebook.com/KSPCOnline/', '_system', 'location=yes');
    //     return false;
    // });
    // });
    window.open('https://www.facebook.com/KSPCOnline/', '_system', 'location=yes');
  };

  $scope.openTwitter = function() {
    window.open('https://twitter.com/kspc', '_system', 'location=yes');
  };

  $scope.openInsta = function() {
    window.open('https://www.instagram.com/kspcradio/', '_system', 'location=yes');
  };
});
