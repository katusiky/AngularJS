angular.module('ToDoList',['LocalStorageModule'])
	.factory('ToDoService', function (localStorageService) {
		var toDoService = {};

		toDoService.key = 'key-todolist';

		if(localStorageService.get(toDoService.key)){
		
			toDoService.activities = localStorageService.get(toDoService.key);
		}else{
		
			toDoService.activities = [];
		} 

		toDoService.add = function (newActivity) {

			toDoService.activities.push(newActivity);
			toDoService.updaLocalStorage();
		};

		toDoService.updaLocalStorage = function () {
		
			localStorageService.set(toDoService.key, toDoService.activities);
		}

		toDoService.clean = function () {
		
			toDoService.activities = [];
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		}

		toDoService.getAll = function () {

			return toDoService.activities;
		}

		toDoService.removeItem = function (item) {
			toDoService.activities = toDoService.activities.filter(function (activity) {
				return activity !== item;
			});
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		}

		toDoService.activities= [];

		return toDoService;
	})
	.controller('ToDoController', function ($scope, ToDoService) {

		$scope.todo = ToDoService.getAll();
		$scope.newActivity = {};

		$scope.addActivity = function () {
			ToDoService.add($scope.newActivity);
			$scope.newActivity = {};
		}
		$scope.removeActivity= function (item) {
			$scope.todo = ToDoService.removeItem(item);
		}
		$scope.clean = function () {
			$scope.todo = ToDoService.clean();
		}
	});