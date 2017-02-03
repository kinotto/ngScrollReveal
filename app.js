angular.module('ngScrollRevealExample', [
  'ui.router',
  'ngScrollReveal'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'index.html'
        })

}])
