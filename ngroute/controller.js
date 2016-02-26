angular
	.module('app', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'ReposController',
				templateUrl: 'templates/home.html'
			})
			.when('/repo/:name', {
				controller: 'RepoController',
				templateUrl: 'templates/repo.html'
			})
			.otherwise('/');
	})
	.directive('myAutocomplete', function () {
		function link(scope,element,attrs) {
			$(element).autocomplete({
				source: scope.$eval(attrs.myAutocomplete),
				select: function (ev, ui) {
					ev.preventDefault();
					if(ui.item) {
						scope.optionSelected(ui.item.value)
					}
				},
				focus: function (ev, ui) {
					ev.preventDefault();
					$(this).val(ui.item.label)
				}
			});
		};
		return {
			link: link
		};
	})
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
	.controller('ReposController', function ($scope, $http) {
		$scope.repos = [];

		$http.get('https://api.github.com/users/twitter/repos')
		.success(function (data) {
			$scope.posts = data;
			for (var i = data.length - 1; i >= 0; i--) {
				var repo = data[i];
				$scope.repos.push(repo.name)
			};
		})
		.error(function (error) {
		})

		$scope.optionSelected = function (data) {
			$scope.$apply(function () {
				$scope.mainRepo = data;
			})
		}
	})
	.controller('RepoController', function ($scope, $http, $routeParams) {
		$scope.repo= {};
		$http.get('https://api.github.com/repos/twitter/'+ $routeParams.name)
		.success(function (data) {
			$scope.repo = data;
		})
		.error(function (error) {
		})

	})