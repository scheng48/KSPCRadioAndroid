angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, DirectoryService) {
    $scope.livestream = document.getElementById("livestream");
    $scope.playPause = function() {
        if(livestream.paused) {
          livestream.play();
          document.getElementById("play-pause").innerHTML = '<i class="icon icon ion-ios-pause" style="color: white"></i>';
        } else {
          livestream.pause();
          document.getElementById("play-pause").innerHTML = '<i class="icon icon ion-ios-play" style="color: white"></i>';
        }
    }

    $scope.init = function() {
        callSpinPapi();
        // DirectoryService.addShow({"test": "asdfasdf"});
    }
})

.controller('DJProfileDetailCtrl', function($scope) {})

.controller('PlaylistCtrl', function($scope, DirectoryService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.init = function() {
      getSchedule(DirectoryService);

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

.controller('DirectoryCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('FavoritesCtrl', function($scope) {})

.controller('SocialMedia', function($scope, $cordovaAppAvailability) {

  /* check if Android or iOS */


  // $scope.shareFacebook = function() {
  //   console.log('meow');
  //   window.plugins.socialsharing.shareViaFacebook("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
  // }

  // $scope.shareFacebook = function() {

  //   if(window.plugins) {
  //     $ionicPlatform.ready(function() {
  //     $cordovaSocialSharing.shareViaFacebook('sharedMsg', "", "")
  //         .then(function(result) {
  //         }, function(err) {
  //             // An error occurred. Show a message to the user
  //             alert("error : "+err);
  //         });
  //     });
  //   }
  //   console.log('hi');
  // };


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
