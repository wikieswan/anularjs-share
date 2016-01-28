appCtrl.controller('aboutCtrl', function($scope,$http) {
	console.log('about');
	//object

	// $scope.user = {
	// 	name: '薛琪琪',
	// 	age: 23,
	// 	sex: '男',
	// 	address:{
	// 		hometown: '天津',
	// 		address: '七宝'
	// 	},
	// 	img : '/img/head.jpg',
	// 	blogUrl: 'https://www.zhihu.com/people/jobxue'
	// }
	getUserInfo();
	function getUserInfo(){
		$http({
			method: 'GET',
			url: '/userinfo'
		})	
		.success(function(data){
			$scope.user = data
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
	
})