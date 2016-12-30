var myModule = angular.module('myApp', []);
myModule.controller('login', function($scope,$http,$state,$stateParams) {
	$scope.login = function() {
		var name = $scope.name;
		var password = $scope.password;
		alert(name + "和" + password);
		var method = "login";
		
		$http({
			method : 'POST',
			url : '/AngularJs/servlet/Test',
			params : {'method' : method,'tel' : name,'password' : password}
		}).success(function(data, status, headers, config) {
			alert(data);
			$state.go("bookMange");
		}).error(function(data, status, headers, config) {
			alert(data);
		});
	}
})