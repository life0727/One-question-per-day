//new

function _new (fun){
    var res = {};
    if(fun.proptype != null){
        res.__proto__ = fun.proptype
    };
    var ret = fun.apply(res,Array.from(arguments).slice(1)); //若构造函数返回指定类型 则返回ret
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}

//test new
function Parent (name){
    this.name = name; 
    this.arr = [1,2,3];
    //return function b() {} //若构造函数返回指定类型 则返回[Function: b]
};

console.log(_new(Parent,'fqm')) // { name: 'fqm', arr: [ 1, 2, 3 ] }



//Object.create

//方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
//第二个参数可选即其自身定义的属性

function _objectCreate(proto){
    function f(){};
    f.prototype = proto;
    return new f();
}

var obj = _objectCreate({'objectCreate':123})
console.log(obj.__proto__) //{ objectCreate: 123 }

//call

Function.prototype._call = function(target){
    target.fn = this;
    var arg = Array.from(arguments).slice(1);
    var res = target.fn(...arg);
    delete target.fn;
    return res;
}

//test call
let foo = {
    value: 1
}

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
console.log(bar._call(foo, 'call', '18')) // black 18 1 undefined

//apply

Function.prototype._apply = function(target){
    target.fn = this;
    var arg = arguments[1]; //传递的已经是数组
    var res = target.fn(...arg);
    delete target.fn;
    return res;
}

//test apply
let foo1 = {
    value: 1
}

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
console.log(bar._apply(foo1, ['apply', '18'])) // black 18 1 undefined

//bind

Function.prototype._bind = function(target){
    var arg = Array.from(arguments).slice(1);
    var that = this;
    function f (){
        arg = [...arg,...arguments];
        that.apply(target,arg)
    }
    f.prototype = Object.create(this.prototype);//指定新函数的prototype与原函数prototype相同
    return f;
}

//test bind
var bindObj = {
    name:'fqm'
}

function testBind(){
    console.log(this.name)
    console.log(arguments)
}

var Bindfun = testBind._bind(bindObj,23)

Bindfun(11) //fqm [Arguments] { '0': 23, '1': 11 }

//Promise

//var promise = new Promise((resolve,reject) => {
//     if (操作成功) {
//         resolve(value)
//     } else {
//         reject(error)
//     }
// })
// promise.then(function (value) {
//     // success
// },function (value) {
//     // failure
// })

//传递一个函数constructor(通常异步)同时此函数有两个参数为回调函数(resolve,reject),当此函数成功则执行resolve,否则reject,

function _Promise(constructor){
    var that = this;
    that.status = 'pending';
    that.result = undefined; //resolve
    that.reason = undefined; //reject
    function resolve(value){
        if(that.status === 'pending'){
            that.result = value;
            that.status = 'resolved'
        }
    }
    function reject(value){
        if(that.status === 'pending'){
            that.reason = value;
            that.status = 'rejected'
        }
    }

    try{
        constructor(resolve,reject)
    }catch(e){
        reject(e)
    }
}

_Promise.prototype.then = function(onFullfilled,onRejected){
    var that = this;
    switch(that.status){
       case "resolved":
         onFullfilled(that.result);
         break;
       case "rejected":
         onRejected(that.reason);
         break;
       default:       
    }
 }
 
var p = new _Promise((res,rej) => {res(100)});

p.then(res => {console.log(res)}) //100

var jsonStr = '{ "age": 20, "name": "jack" }'
var json = (new Function('return ' + jsonStr))();
console.log(json)

//JSON.stringify

function _jsonStringify(obj) {
    let type = typeof obj;
    if (type !== "object") {
        if (/string|undefined|function/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = []
        let arr = Array.isArray(obj)
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = '"' + v + '"';
            } else if (type === "object") {
                v = _jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
}

//test _jsonStringify

console.log(_jsonStringify({x : 5})) // "{"x":5}"
console.log(_jsonStringify([1, "false", false])) // "[1,"false",false]"
console.log(_jsonStringify({b: undefined})) // "{"b":"undefined"}"

//JSON.parse

function _jsonStringParse (str){
    var res = new Function('return' + str);
    return res()
}

//test _jsonStringParse
console.log(_jsonStringParse('{ "age": 20, "name": "jack" }'))  //{ age: 20, name: 'jack' }

//_deepCopy

function _deepCopy(arg){
    let filterArr = ['[object Array]','[object Object]'];
    let res = filterArr.includes(Object.prototype.toString.call(arg)) ? Array.isArray(arg) ? [] : {} : arg;
    for(let i in arg){
        res[i] = filterArr.includes(Object.prototype.toString.call(arg[i])) ? _deepCopy(arg[i]) : arg[i]
    }
    return res;
}

//test _deepCopy
var a = {
    name:'fu',
    money:{'rmb':100,'$':999},
    reg:new RegExp(/^1(3|4|5|7|8)\d{9}$/),
    fun:function(){},
    err: new Error('我是一个错误'),
    date:new Date(0)

};
var b = _deepCopy(a);
console.log(a.money === b.money) //false
console.log(a.reg === b.reg) //true
console.log(a.date === b.date) //true
console.log(a.fun === b.fun) //true
console.log(a.err === b.err) //true


//instanceof

function _instanceOf(target,origin){
    let proto = target.__proto__;
    let proptype = origin.prototype;
    while(true){
        if(proto == null) return false;
        if(proto == proptype) return true;
        //若本次查找无结果，则沿着原型链向上查找
        proto = proto.__proto__;
    }
}

console.log(_instanceOf([1,2],Array))