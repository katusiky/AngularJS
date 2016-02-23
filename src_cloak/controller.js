angular
	.module('app', [])
	.controller('Controller', function ($scope, $http) {
		$http.get('https://api.github.com/users/katusiky/repos')
		.success(function (data) {
			$scope.repos = data
		})
		.error(function (error) {
			console.log(error)
		})
	})