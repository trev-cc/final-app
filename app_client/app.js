(function () {

  angular.module('darkskyApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("BEING AIRPLANE SERVICES APP - MEAN STACK DRIVEN");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'hc'
      })
      .when('/member', {
        templateUrl: '/member/member.view.html',
        controller: 'memberCtrl',
        controllerAs: 'mc'
      })
      .when('/location', {
        templateUrl: '/location/location.view.html',
        controller: 'locationCtrl',
        controllerAs: 'lc'
      }) 
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('darkskyApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();