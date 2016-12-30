var nav = angular.module('nav',[]);

nav.controller('nav',function($scope,$state){
	$scope.addBook = function(){
		$state.go('bookMange.addBook');
	}
	
	$scope.bookList = function() {
		$state.go('bookMange.bookList');
	}
})