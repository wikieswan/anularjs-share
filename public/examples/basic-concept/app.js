//声明一个模块
var app = angular.module('myApp',[])
	//自定义的 filter
	.filter('toPercent', [function () {
		return function (input, len, symbol) {
			if(isNaN(input)){ return input }
			len = len | 0;
			symbol = symbol === false ? '' : '%';
			return (input * 100).toFixed(len) + symbol;
		}
	}])
//app 启动时允许
app.run(function($rootScope){
	$rootScope.message = 'hello world';
});

//app 注册一个 controller  helloController
app.controller('helloController',function($scope){
	$scope.message = 'hello china';
});

//各种数据类型的$scope绑定
app.controller('mutilscopeController',function($scope){
	
	//string
	$scope.username = '薛琪琪';

	//boolean
	$scope.isTall = true;

	//number
	$scope.userage = 23;

	//function
	$scope.showGileFriend = function(){
		alert('他没有女朋友');
	}

	//object
	$scope.info = {
		sex: '男',
		address:{
			hometown: '天津',
			address: '七宝'
		}
	}

	//array
	$scope.targets = ['小师妹','小前台','小灰灰'];

	$scope.userImg = '/img/head.jpg';

	$scope.blogUrl = 'https://www.zhihu.com/people/jobxue';

})

app.controller('counterController',function($scope){
	$scope.counter = 0;
	$scope.add = function(){
		$scope.counter ++ ;
	}
	$scope.sub = function(){
		if($scope.counter>0){
			$scope.counter -- ;
		}
		else{
			$scope.counter = 0;
		}
	}
});

//nameController
app.controller('nameController',function($scope){
	$scope.name = '';
});


//domainController
app.controller('domainController',function($scope){
	$scope.name = '薛琪琪';
});

//parentController
app.controller('parentController',function($scope){
	$scope.username = '薛琪琪';
	$scope.userage = 23;
	$scope.usersex = '男';

});

//childController
app.controller('childController',function($scope){
	$scope.username = '薛琪琪';
	$scope.userage = 24;
});

//expression
app.controller('expressionController',function($scope){
	$scope.username = '薛琪琪';
	$scope.userage = 23;
	$scope.usersex = '男';
});

//filter
app.controller('filterController',function($scope){
	var dataTime = new Date();
	$scope.dataTime = dataTime;

	$scope.orderAmount = 10233;
	$scope.rejeckRate = 0.1222;
})













