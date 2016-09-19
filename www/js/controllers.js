angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.livestream = document.getElementById("livestream");
    $scope.playPause = function() {
        if(livestream.paused) {
          livestream.play();
          document.getElementById("play-pause").innerHTML = '<i class="icon icon ion-ios-pause"></i>';
        } else {
          livestream.pause();
          document.getElementById("play-pause").innerHTML = '<i class="icon icon ion-ios-play"></i>';
        }
    }
})

.controller('PlaylistCtrl', function($scope, Items) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.items = Items.all();
  $scope.remove = function(item) {
    Items.remove(item);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PlaylistDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.itemId);
})

.controller('SearchCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('FavoritesCtrl', function($scope) {});