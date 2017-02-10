angular.module('ngScrollRevealPage')
.controller('homeCtrl', function($scope){
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
        selector: '.profile',
        interval: 100
      }
    }
    var zoomRotate = {
      distance: '0px',
      rotate: {z: 720},
      scale: 0.1,
      sequence: {
        selector: '.slice--third--text--box',
        interval: 100
      }
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
    $scope.optionsS2_2_box = angular.extend(angular.extend({}, baseConfig), zoomRotate);
    //$scope.optionsBG2 = angular.extend(angular.extend({}, baseConfig), {origin: 'left'});
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
    link: function($scope, element, attrs){
      $timeout(function(){
          var navbar = angular.element(document.querySelector('.navbar'));
          if(navbar[0]){
            var navbarHeight = navbar[0].offsetHeight;
            element.css('margin-top', navbarHeight);
          }
        })
    }
  }
}]);