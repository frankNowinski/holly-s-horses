angular
  .module('app', ['ui.router', 'templates', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    });

    $urlRouterProvider.otherwise('/');
  });
