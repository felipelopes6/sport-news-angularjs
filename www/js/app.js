var sportNews = angular.module('sportNews', [
  'ionic',
  // controllers
  'HomeController',
  'NoticesController',
  'StatisticsController',
  'CalendarController',
  'PlayersController',
  'TrophiesController',
  // services
  'HomeService',
  'NoticesService'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

sportNews.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  $stateProvider.state('notices', {
    url: '/notices',
    templateUrl: 'templates/notices.html',
    controller: 'NoticesCtrl'
  })
  $stateProvider.state('statistics', {
    url: '/statistics',
    templateUrl: 'templates/statistics.html',
    controller: 'StatisticsCtrl'
  })
  $stateProvider.state('calendar', {
    url: '/calendar',
    templateUrl: 'templates/calendar.html',
    controller: 'CalendarCtrl'
  })
  $stateProvider.state('players', {
    url: '/players',
    templateUrl: 'templates/players.html',
    controller: 'PlayersCtrl'
  })
  $stateProvider.state('trophies', {
    url: '/trophies',
    templateUrl: 'templates/trophies.html',
    controller: 'TrophiesCtrl'
  })

  $urlRouterProvider.otherwise('/');

});

