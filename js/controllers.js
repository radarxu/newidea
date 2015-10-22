var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListController', function ($scope, $http) {
	$http.get('phones/phones.json').success(function (data) {
		$scope.phones = data;
	});
	//$http get success
	$scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailController', function ($scope, $routeParams) {
	$scope.phoneId = $routeParams.phoneId;
});