var ionicApp = angular.module('starter.controllers', ['ngCordova']);

ionicApp.controller('DashCtrl', function($scope) {
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

ionicApp.controller('DirectoryCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

ionicApp.controller('FavoritesCtrl', function($scope) {});

ionicApp.controller("SocialMedia", function($scope, $cordovaSocialSharing) {

    // $scope.shareFacebook = function() {
    //   console.log('meow');
    //   window.plugins.socialsharing.shareViaFacebook("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
    // }

    $scope.shareFacebook = function() {

      if(window.plugins) {
        $ionicPlatform.ready(function() {
        $cordovaSocialSharing.shareViaFacebook('sharedMsg', "", "")
            .then(function(result) {
            }, function(err) {
                // An error occurred. Show a message to the user
                alert("error : "+err);
            });
        });
      }
      console.log('hi');
    };
 
});


