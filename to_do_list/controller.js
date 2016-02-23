angular.module('ToDoList',['LocalStorageModule'])
	.controller('ToDoController', function ($scope, LocalStorageService) {
		if(LocalStorageService.get('key-todolist')){
			$scope.todo = LocalStorageService.get('key-todolist');
		}else{
			$scope.todo= [];
		}
		$scope.$watchCollection('todo',function (newValue, oldValue) {
			LocalStorageService.set('key-todolist',$scope.todo)
		});
		$scope.addActivity = function () {
			$scope.todo.push($scope.newActivity);
			$scope.newActivity = {};
		}
		$scope.clean= function () {
			$scope.todo = [];
		}
	});