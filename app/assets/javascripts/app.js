angular
  .module('app', ['ui.router', 'templates', 'ngResource'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    });

    $urlRouterProvider.otherwise('/');
  }]);
