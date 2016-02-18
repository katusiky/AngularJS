var app = angular.module('MyFirstApp', [])
	app.controller('firstController', function ($scope) {
		$scope.name= 'José',
		$scope.lastName= 'De León';
});

