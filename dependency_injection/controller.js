angular.module('MyFirstApp',[])
	.controller('FirstController', function ($scope, $http) {
		$scope.posts = [];
		$scope.newPost = {};
		$http.get('http://jsonplaceholder.typicode.com/posts')
			.success(function (data) {
				$scope.posts = data;
			})
			.error(function (error) {
				console.log(error)	
			});
			$scope.addPost = function () {
				$http.post('http://jsonplaceholder.typicode.com/posts',{
					title: $scope.newPost.title,
					body: $scope.newPost.body,
					userId: 1
				})
					.success(function (data,status,headers,config) {
						console.log(status)
						$scope.posts.push($scope.newPost);
						$scope.newPost = {};
					})
					.error(function (error,status,headers,config) {
						console.log(error);
					});
			}
	});