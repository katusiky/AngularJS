angular
	.module('app', [])
	.run(function ($rootScope) {
		$rootScope.name = 'José';
	})
	.controller('Controller', function ($scope) {
		$scope.name = 'De león';
		setTimeout(function () {
			$scope.$apply(function () {
				$scope.name = 'Barrios'
			})
		}, 2000)
	})
	.controller('childController', function ($scope) {
	setTimeout(function () { 
		console.log($scope.name)
	}, 3000)
	})
	;