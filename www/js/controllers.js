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
    document.getElementById("play-pause").innerHTML = '<i class="icon icon ion-pause" style="color: white"></i>';
  }

  $scope.favorite = function() {
    var favoriteDJ = {
      DJName: DJNameNow
    };
    favoriteDJ._id = 'favoriteDJ-' + favoriteDJ.DJName;
    DirectoryService.addShow(favoriteDJ);
  }

  $scope.openKSPC = function() {
    window.open('http://kspc.org/', '_system', 'location=yes');
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

  DirectoryService.getDaySchedule($scope.day).then(function(shows) {
    $scope.shows = shows.sort(compareTime);
    console.log($scope.shows);
  });

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

.controller('FavoritesCtrl', function($scope, DirectoryService) {
  DirectoryService.getFavorites().then(function(favorites) {
    $scope.favorites = favorites;
    console.log($scope.favorites);
  });
})

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
