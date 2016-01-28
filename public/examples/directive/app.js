//声明一个模块
var app = angular.module('myApp',[])
	.directive('stardirective',function(){
		return {
			restrict: 'AE',
		    replace: true,
			scope : {
				userid : '@userid'
			},
		    template: '<button class="btn btn-star" ></button>' ,
		    link: function(scope, elem, attrs) {
				var stars = fetchStars(scope.userid);
				elem.html('stars '+stars)
				elem.on('click',function(){
					stars ++ ;
					elem.html('starsed '+stars)
					elem.attr('disabled',true)
				})
				function fetchStars(userid){
					// get stars by userid 
					var json = {
						'1234455231' : 31,
						'7275172676' : 321,
					}
					return json[userid];
				}
		    }
		}
	})

//app 启动时允许
app.run(function($rootScope){
	$rootScope.message = 'hello world';
});

//directiveController
app.controller('directiveController',function($scope){
	$scope.username = '薛琪琪';
	$scope.userImg = '/img/head.jpg';
	$scope.userid = '1234455231';
});














