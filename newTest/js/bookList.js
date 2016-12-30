var bookList = angular.module('bookList',[]);

bookList.controller('bookList',function($scope){
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