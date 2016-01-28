var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/userinfo', function(req, res){
	var data = {
		name: '薛琪琪',
		age: 23,
		sex: '男',
		address:{
			hometown: '天津',
			address: '七宝'
		},
		img : '/img/head.jpg',
		blogUrl: 'https://www.zhihu.com/people/jobxue'
	};
  res.send(data);
});



app.listen(3000);

console.info('server start on port 3000, http://loaclhost:3000');