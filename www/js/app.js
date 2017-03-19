// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MediaCtrl', function($scope, $ionicModal) {

    $scope.allImages = [{
        'src' : 'img/1.jpg'
    }, {
        'src' : 'img/2.jpg'
    }, {
        'src' : 'img/3.jpg'
    }, {
        'src' : 'img/4.jpg'
    }];

    $scope.Imagesc = [{
        'src' : 'img/l1.jpg'
    }, {
        'src' : 'img/l2.jpg'
    }, {
        'src' : 'img/l3.jpg'
    },{
        'src' : 'img/l4.jpg'
    }];

    $scope.Imagesf = [{
        'src' : 'img/f1.jpg'
    }, {
        'src' : 'img/f2.jpg'
    }, {
        'src' : 'img/f3.jpg'
    },{
        'src' : 'img/f4.jpg'
    }];

     $scope.Imagesm = [{
        'src' : 'img/m1.jpg'
    }, {
        'src' : 'img/m4.jpg'
    }, {
        'src' : 'img/m3.jpg'
    },{
        'src' : 'img/m2.jpg'
    }];

    $scope.Imageso = [{
        'src' : 'img/o1.jpg'
    }, {
        'src' : 'img/o2.jpg'
    }, {
        'src' : 'img/o3.jpg'
    },{
        'src' : 'img/o4.jpg'
    }, {
        'src' : 'img/o5.jpg'
    },{
        'src' : 'img/o6.jpg'
    }];

    $scope.Imagesb = [{
        'src' : 'img/b1.jpg'
    }, {
        'src' : 'img/b2.jpg'
    }, {
        'src' : 'img/b3.jpg'
    },{
        'src' : 'img/b4.jpg'
    }, {
        'src' : 'img/b5.jpg'
    }];

    $scope.clipSrc = 'img/coffee.MOV';

    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
    }
    
    $scope.showImagesc = function(indexc) {
        $scope.activeSlidec = indexc;
        $scope.showModal('templates/image-popover1.html');
    }

    $scope.showImagesf = function(indexf) {
        $scope.activeSlidef = indexf;
        $scope.showModal('templates/image-popover2.html');
    }

    $scope.showImagesm = function(indexm) {
        $scope.activeSlidem = indexm;
        $scope.showModal('templates/image-popover3.html');
    }

    $scope.showImageso = function(indexo) {
        $scope.activeSlideo = indexo;
        $scope.showModal('templates/image-popover4.html');
    }

    $scope.showImagesb = function(indexb) {
        $scope.activeSlideb = indexb;
        $scope.showModal('templates/image-popover5.html');
    }

    $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }

    // Close the modal
    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove()
    };

});