/**
 * AngularJS Tutorial 1
 * @author Rajesh Selvaraj
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('myWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);