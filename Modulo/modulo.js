var module = angular.module('AGoodModel',[]);
module.controller('secondController', function ($scope) {
	$scope.name = 'MODULO';
}).controller('thirdController', function ($scope) {
	$scope.lastName = 'MODULO 2'
});




/* el primer parámetro que recibe el modulo es el nombre
del modulo, el segundo son los modulos de los que depende 
el que estamos creando.

	ngResource Atraves de este podremos crear un objeto RestFull para 
	comunicarns con las RestAPI.
 */