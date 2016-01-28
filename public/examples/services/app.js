//声明一个模块
var app = angular.module('myApp',[])
	.factory('userinfoServices',function(){
		var userinfo;

		return {
			get: function(){
				if(typeof userinfo !== 'undefined') {
					console.log('get from cache')
					return userinfo;
				}
				//get userinfo from server
				console.log('get from server')
				var _userinfo = {
					name: 'Jack',
					age: 23
				}
				userinfo = _userinfo
				return userinfo;
			}
		}
	})

//servicesController
app.controller('servicesController',function($scope,userinfoServices){
	$scope.userinfo = userinfoServices.get();
	$scope.refrash = function(){
		$scope.userinfo = userinfoServices.get();
	}
});














