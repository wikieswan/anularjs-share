//声明一个模块
var app = angular.module('myApp',['ui.router','myApp.controllers'])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    cache: false,
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  })

  .state('about', {
    url: '/about',
    cache: false,
    templateUrl: 'views/about.html',
    controller: 'aboutCtrl'
  })
  .state('connect', {
    url: '/connect',
    cache: false,
    templateUrl: 'views/connect.html',
    controller: 'connectCtrl'
  })
  ;
  $urlRouterProvider.otherwise('home');

});


// controller
var appCtrl =  angular.module('myApp.controllers', []);













