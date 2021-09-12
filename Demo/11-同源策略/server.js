// 1、引入express
const express = require('express');

// 2、创建应用对象
const app = express();

// 3、创建路由规则
app.get('/home', (request, response) => {
    // 响应一个页面
    response.sendFile(__dirname + '/11-同源策略.html');
});
app.get('/data', (request, response) => {
    response.send('用户数据');
});

// 4、监听端口启动服务
app.listen(9000, () => {
    console.log("服务已经启动，9000 端口监听中...");
});
