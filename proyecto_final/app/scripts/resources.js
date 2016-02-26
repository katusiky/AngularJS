angular
	.module('app')
	.factory('Posts', function ($resource) {
		return $resource('http://jsonplaceholder.typicode.com/posts/:id', 
			{id: '@id'},
			{
				update: {
					method: 'patch'
				}
			}
			)
	})
	.factory('Users', function ($resource) {
		return $resource('http://jsonplaceholder.typicode.com/users/:id', 
			{id: '@id'}
			)
	})