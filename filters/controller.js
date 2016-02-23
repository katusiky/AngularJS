angular
	.module('Filters', [])
	.filter('removeHtml', function () {
		return function(text){
			//return text.toUpperCase();
			return String(text).replace(/<[^>]+>/gm, '');
		}
	})
	.controller('FiltersController', function ($scope) {
		//$scope.my_html = '<h1> Hola mundo </h1>'
		$scope.my_html = {};
		$scope.my_html.title = 'Hola';
		$scope.my_html.body = 'Hola Mundo';
		$scope.costo  = 2000
	})