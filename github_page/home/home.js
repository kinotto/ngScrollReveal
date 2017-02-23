angular.module('ngScrollRevealPage')
.controller('homeCtrl', function($scope){
  $scope.showLoader = true;

  var baseConfig = {
      origin: 'top',
      distance : '150px',
      delay: 30,
      scale: 0.4,
      duration: 1000,
      reset: false,
      easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
    }
    var fade = {
      distance: '0px',
      reset: true,
      opacity: 0,
      scale: 1,
      sequence: {
        interval:1000
      }
    }
    var fade2 = {
      distance: '0px',
      reset: false,
      opacity: 0,
      scale: 2
    }
    var scrollRevealLeft = {
      origin: 'left',
      distance: '200px'
    }
    var zoom = {
      distance: '0px'
    }
    var zoomBox = {
      distance: '0px',
      sequence: {
        selector: '.figure',
        interval: 100
      }
    }
    var zoomRotate = {
      distance: '0px',
      rotate: {z: 720},
      scale: 0.1
    }
    var scrollRevealRight = {
      origin: 'right',
      distance: '200px',
      scale: 1
    }
    var scrollRevealUp = {
      origin: 'top',
      distance: '200px',
      rotate: {z: 10}
    }

    $scope.counter = [];
    (function(){for(var i = 0; i < 40; i++){$scope.counter.push(i);}})()

    $scope.optionsBG = angular.extend(angular.extend({}, baseConfig), fade);
    $scope.optionsBGContent = angular.extend(angular.extend({}, baseConfig), scrollRevealUp);
    $scope.optionsS1 = angular.extend(angular.extend({}, baseConfig), scrollRevealLeft);
    $scope.optionsS2 = angular.extend(angular.extend({}, baseConfig), zoom);
    $scope.optionsS3 = angular.extend(angular.extend({}, baseConfig), scrollRevealRight);
    $scope.optionsS2_1_box = angular.extend(angular.extend({}, baseConfig), zoomBox);
    $scope.options_logo = angular.extend(angular.extend({}, baseConfig), zoomRotate);
    $scope.options_logo_text = angular.extend(angular.extend({}, baseConfig), fade2);

})
.directive('checkActive', function(){
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs){
      element.bind('click', function(){
        element.addClass('active');
        element.siblings('li').removeClass('active');
      })
    }
  }
})
.directive('checkNavbar', function(){
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs){
        $(document).click(function (event) {
          var clickover = $(event.target);
          var $navbar = $(".navbar-collapse");
          var _opened = $navbar.hasClass("in");
          if (_opened === true && !clickover.hasClass("navbar-toggle")) {
              $navbar.collapse('hide');
          }
      });
    }
  }
})
.directive('styleManager', ['$timeout', function($timeout){
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element, attrs){
      $timeout(function(){
          var navbar = angular.element(document.querySelector('.navbar'));
          if(navbar[0]){
            var navbarHeight = navbar[0].offsetHeight;
            element.css('margin-top', navbarHeight);
          }
        })
    }
  }
}])
.directive('preloadImages', ['$timeout', '$q', function($timeout, $q){
  return {
    restrict: 'A',
    link: function($scope, element, attrs){
      $timeout(function(){
      var preloadIMG = function (url) {
        var deffered = $q.defer();
        var image = new Image();
        image.src = url;
        if (image.complete) {
          deffered.resolve('resolved');
        } else {
          image.addEventListener('load', function() {
            deffered.resolve('resolved');
          });

          image.addEventListener('error', function() {
            deffered.reject();
          });
        }
        return deffered.promise;
      }

      var images =[
        preloadIMG('../img/1.jpg'),
        preloadIMG('../img/2.jpg'),
        preloadIMG('../img/3.jpg'),
        preloadIMG('../img/4.jpg'),
        preloadIMG('../img/profiles/1.jpg'),
        preloadIMG('../img/profiles/2.jpg'),
        preloadIMG('../img/profiles/3.jpg'),
        preloadIMG('../img/profiles/4.jpg'),
        preloadIMG('../img/profiles/5.jpg'),
        preloadIMG('../img/profiles/6.jpg'),
        preloadIMG('../img/profiles/7.jpg'),
        preloadIMG('../img/profiles/8.jpg'),
        preloadIMG('../img/profiles/9.jpg'),
        preloadIMG('../img/profiles/10.jpg'),
        preloadIMG('../img/profiles/11.jpg'),
        preloadIMG('../img/profiles/12.jpg'),
        preloadIMG('../img/profiles/13.jpg'),
        preloadIMG('../img/profiles/14.jpg'),
        preloadIMG('../img/profiles/15.jpg'),
        preloadIMG('../img/profiles/16.jpg'),
      ]

      $q.all(images).then(function(res){
        $timeout(function(){
          $scope.$parent.showLoader = false;
        },300);
      }).catch(function(){
        console.log('error retrieving images');
        $timeout(function(){
          $scope.$parent.showLoader = false;
        },300);
      })
      })
    }
  }
}]);
