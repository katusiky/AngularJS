angular
	.module('app')
	.controller('MainController', function ($scope, Posts, Users) {
		$scope.posts = Posts.query();
		$scope.users = Users.query();

		$scope.removePost = function (post) {
			Posts.delete({id: post.id}, function (data) {
				console.log(data)
			});
			$scope.posts = $scope.posts.filter(function (element) {
				return element.id !== post.id;
			});
		}
	})
	.controller('PostController', function ($scope, Posts, $routeParams, $location) {
		$scope.title= 'Editar Post';
		$scope.post = Posts.get({id: $routeParams.id});
		$scope.savePost = function () {
			Posts.update({id: $scope.post.id},{data: $scope.post}, function (post) {
				console.log(post);
				$location.path('/post/' + $scope.post.id);
			});
		};
	})
	.controller('NewPostController', function ($scope, Posts, $location) {
		$scope.post = {};
		$scope.title = 'Crear Post'
		$scope.savePost = function () {
			Posts.save({data: $scope.post}, function (post) {
				$scope.post = {};
				console.log(post);
				$location.path('/');
			});
		};
	})