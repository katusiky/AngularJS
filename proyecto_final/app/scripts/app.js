angular
	.module('app', ['lumx','ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'MainController',
				templateUrl: '/scripts/templates/home.html'
			})
			.when('/post/:id', {
				controller: 'PostController',
				templateUrl: '/scripts/templates/post.html'
			})
			.when('/posts/new', {
				controller: 'NewPostController',
				templateUrl: '/scripts/templates/post_form.html'
			})
			.when('/posts/edit/:id', {
				controller: 'PostController',
				templateUrl: '/scripts/templates/post_form.html'
			})
	});