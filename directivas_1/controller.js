angular
	.module('app', [])
	.directive('backImg', function () {
		return function (scope, element, attrs) {
			attrs.$observe('backImg', function (value) {
				element.css({
					"background": "url("+value+")",
					"background-size": "cover",
					"background-position": "center"
				});
			});
		};
	})
	.controller('Controller', function ($scope, $http) {
		$http.get('https://api.github.com/users/katusiky/repos')
		.success(function (data) {
			$scope.repos = data
		})
		.error(function (error) {
			console.log(error)
		})
	})