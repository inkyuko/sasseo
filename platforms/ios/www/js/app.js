// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('sasseo', ['ionic','sasseo.controllers'])

.run(function($ionicPlatform, $http, $rootScope, $ionicLoading, $ionicModal, $ionicScrollDelegate, $ionicHistory, $state) {
  window.disableScrolling = false;
  $http.defaults.withCredentials = true;

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


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    templateUrl: 'templates/layout.html',
    controller: 'AppCtrl'
  })

  .state('app.main', {
    url: "/main",
    views: {
      'mainContent': {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      }
    },
    header: false
  })

  .state('app.list', {
    url: "/list",
    views: {
      'mainContent': {
        templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
      }
    },
  })

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/main');

});