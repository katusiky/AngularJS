angular.module('MyFirstApp',[])
	.controller('FirstController', function ($scope) {
	$scope.name = ' José';
	$scope.newComment = {};
	$scope.comments= [
		{
			comment: 'good tutorial',
			username: 'jose'		
		},
		{
			comment: 'aprendiendo un poco',
			username: 'alonso'
		},
		{
			comment: 'hola de nuevo',
			username: 'numero 3'
		}
	];
	$scope.addComment = function () {
		$scope.comments.push($scope.newComment);
		$scope.newComment= {};
	};
})