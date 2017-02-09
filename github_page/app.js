angular.module('ngScrollRevealPage', [ 
  'ui.router',
  'ngScrollReveal'
  ])
.config(function($stateProvider){
  $stateProvider
   .state('home', {
      views: {
        'header': {
          templateUrl: 'header.html'
        }, 
        'content': {
          template: '<div ui-view style-manager></div>'
        }
      }
   })
   .state('home.main', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl'
   })
})
.run(function($state){
  $state.go('home.main');
})