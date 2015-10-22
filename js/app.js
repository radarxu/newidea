var app = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers']);

app.config(function ($routeProvider) {
	$routeProvider.when('/phones', {
		templateUrl: 'partials/phone-list.html',
		controller: 'PhoneListController'
	}).when('/phones/:phoneId', {
		templateUrl: 'partials/phone-detail.html',
		controller: 'PhoneDetailController'
	}).otherwise({ redirectTo: '/phones' });
});