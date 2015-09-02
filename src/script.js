angular.module('app.memberList', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/views/user-form.html',
        controller: 'UserFormController',
        controllerAs: 'userCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });