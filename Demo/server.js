// 1、引入express
const express = require('express');

// 2、创建应用对象
const app = express();

// 3、创建路由规则
// request 请求报文的封装
// response 响应报文的封装
app.get('/', (request, response) => {
    // 设置响应
    response.send('Hello Express');
});
app.get('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello Express');
});
app.post('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello Express');
});
app.all('/server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许任意类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello Express');
});
app.all('/server-json', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许任意类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name:'Hello Ajax - 2'
    }
    // 只能接收字符串和buffer，需要做转换
    let str = JSON.stringify(data);
    response.send(str);
});
app.all('/server-ie', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许任意类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello Ajax - 3');
});
app.all('/server-timeout', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    setTimeout(() =>{
        response.send('Hello Ajax');
    }, 2000)
});
app.all('/server-jquery', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许任意类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name:'Hello jQuery'
    }
    response.send(JSON.stringify(data));
});
app.all('/server-axios', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许任意类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name:'Hello axios'
    }
    response.send(JSON.stringify(data));
});
app.all('/server-fetch', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，允许任意类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name:'Hello fetch'
    }
    response.send(JSON.stringify(data));
});
app.all('/server-jsonp', (request, response) => {
    // response.send('hello jsonp'); // 返回结果是一个函数调用
    const data = {
        name: 'JSONP'
    };
    let str = JSON.stringify(data);
    // end 方法不会有特殊响应头
    // 为了方便拼接，用模板字符串
    response.end(`handle(${str})`); // 返回结果是一个函数调用
});
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg:'用户名已存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`); 
});
app.all('/server-jsonp-jquery', (request, response) => {
    const data = {
        msg:'server-jsonp-jquery'
    };
    let str = JSON.stringify(data);
    // response.end(`(${str})`); 

    // 接收callback参数
    var cb = request.query.callback;
    response.end(`${cb}(${str})`); 
});
app.all('/server-cors', (request, response) => {
    // 设置响应头，允许跨域
    // response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello cors');
});

// 4、监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中...");
});
