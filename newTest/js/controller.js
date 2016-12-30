
console.log(123);
var myModule = angular.module('controller', ['ngGrid']);
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
/*
myModule.controller('nav',function($scope,$state){
	$scope.addBook = function(){
		$state.go('bookMange.addBook');
	}
	
	$scope.bookList = function() {
		$state.go('bookMange.bookList');
	}
})

myModule.controller('bookList',function($scope){
	    $scope.mySelections = [];
		    $scope.myData = [{name: "Moroni", age: 50,school:"a理工"},
	                     {name: "Tiancum", age: 43,school:"b理工"},
	                     {name: "Jacob", age: 27,school:"c理工"},
	                     {name: "Nephi", age: 29,school:"d理工"},
	                     {name: "Enos", age: 34,school:"ex理工"}];
	    $scope.gridOptions = { 
	      data: 'myData',
	      selectedItems: $scope.mySelections,
	      multiSelect: false
	    }
})

myModule.controller('addBook',function($scope){
	
})

*/