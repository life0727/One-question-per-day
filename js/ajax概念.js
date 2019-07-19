
//什么是AJAX？

//AJAX全称asychronous javascript and xml。是实现服务器与客户端的异步通信的技术，实现页面的局部刷新。不比整个刷新页面，更好的用户体验。

````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

//如何创建AJAX？

//1.创建一个XMLHttpRequest对象   var httpRequest = new XMLHttpRequest()

//2.创建一个新的http请求，指定请求的方式（post/get），地址（URl），以及参数（同步还是异步以及验证信息）

//3.设置请求响应变化后的回调函数

//4.发送请求

//5.获取数据以及js处理dom实现局部刷新


var httpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();//在IE6以上的版本以及其他内核的浏览器(Mozilla)等

    //创建http请求
    httpRequest.open("POST", "Servlet1", true);

    //post方式，需要设置消息头
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //指定回调函数
    httpRequest.onreadystatechange = response22;

    //得到文本框的数据
    var name = document.getElementById("username").value;

    //发送http请求，把要检测的用户名传递进去
    httpRequest.send("username=" + name);

    //回调函数并处理数据
    function response22() {

        //判断请求状态码是否是4【数据接收完成】
        if(httpRequest.readyState == 4) {

            //再判断状态码是否为200【200是成功的】
            if(httpRequest.status == 200) {

                //得到服务端返回的文本数据
                var res = httpRequest.responseText;
            }

        }
    }
````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//什么是XMLHttpRequest

//XMLHttpRequest是一个js对象，是一种支持异步请求的技术也是ajax的核心。

//XMLHttpRequest对象 方法：{
//                            open() :  创建http请求。常用的包含三个参数请求方式，地址，是否异步。 XMLHttpRequest.open('GET','192.168.0.3/api',true)  
//                            send() :  发送http请求。如果是GET则不用传参。POST则需要把参数传进去。XMLHttpRequest.send('name=' + name)
//                            setRequestHeader() : 设置请求头。如果是GET则不用设置，post则设置。 XMLHttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")                                                     
//                       } 
//                   属性：{
//                            onreadystatechange : 请求状态(readyState)变化时触发。一般指定回调函数
//                            readyState : 请求状态。五个状态（0：未初始化。1：open方法成调用。2：服务器已经答应客户端的请求。3：交互中，Http头信息已经接收，响应数据尚未接收。4：数据接收完成。）
//                            responseText: 服务器返回的文本内容。
//                            responseXml : 服务器返回兼容DOM的XML内容。
//                            status：服务器返回的状态码       
//} 

````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

//fetch 相比 ajax有什么优劣势？
//优势：
//1.语法简洁，更加语义化
//2.基于标准 Promise 实现，支持 async/await

//劣势：
//1.兼容性。
//2.Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
fetch(url).then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log("error", e))