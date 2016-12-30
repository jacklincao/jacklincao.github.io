var myAppModule = angular.module('myApp',[]);

myAppModule.controller('register',function($scope){
	$scope.registerButton = function(){
		var tel = $scope.tel;
		var password1 = $scope.password1;
		var password2 = $scope.password2;
		if(password1 == password2){
			alert(tel+"和"+password2);
			var method = "register";
//			$.ajax({
//				type : "post",
//				contentType : "application/x-www-form-urlencoded; charset=utf-8",
//				url : "/AngularJs/servlet/Test",
//				data : {'method' : method,'tel' : tel,'password1' : password1,'password2':password2},
//				success : function(data) {
//					alert(data);
//				},
//				error : function(data) {
//					alert("发送失败");
//				}
//			});
			$http({
				method : 'POST',
				url : '/AngularJs/servlet/Test',
				params : {'method' : method,'tel' : name,'password' : password}
			}).success(function(data, status, headers, config) {
				alert(data);
			}).error(function(data, status, headers, config) {
				alert(data);
			});
		}
	}
})
