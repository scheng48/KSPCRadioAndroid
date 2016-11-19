var ionicApp = angular.module('starter.controllers', ['ngCordova']);

ionicApp.controller('DashCtrl', function($scope) {
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
    }
})

ionicApp.controller('DJProfileDetailCtrl', function($scope) {})

ionicApp.controller('PlaylistCtrl', function($scope) {
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

ionicApp.controller('ChatsCtrl', function($scope, Chats) {
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

ionicApp.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

ionicApp.controller('DirectoryCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();

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

ionicApp.controller('FavoritesCtrl', function($scope) {});

ionicApp.controller("SocialMedia", function($scope, $cordovaAppAvailability) {

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
