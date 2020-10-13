/* 
* bind实现原理
* call实现原理
*/


//bind：可以指定函数内部的执行上下文；返回新函数，并把bind函数第一个参数之后的参数拼接到返回的新函数的实参之前。


//官方实现

// Function.prototype.bind = function (oThis) {    
//     if (typeof this !== "function") {
//       // closest thing possible to the ECMAScript 5 internal IsCallable function
//       throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
//     }

//     var aArgs = Array.prototype.slice.call(arguments, 1), 
//         fToBind = this, 
//         fNOP = function () {},
//         fBound = function () {
//           return fToBind.apply(this instanceof fNOP && oThis
//                                  ? this
//                                  : oThis || window,
//                                aArgs.concat(Array.prototype.slice.call(arguments)));
//         };

//     fNOP.prototype = this.prototype;
//     fBound.prototype = new fNOP();

//     return fBound;
//   };


//自己实现bind

Function.prototype._bind = function(target){
    const that = this;
    let arg = Array.from(arguments).slice(1);
    function f (){
        arg = [...arg,...arguments]
        that.apply(target,arg)
    };
    //指定新函数的prototype与原函数prototype相同
    // function a(){}; //中间层 防止修改返回的函数prototype影响原函数的prototype
    // a.prototype = this.prototype;
    // f.prototype = new a; 
    f.prototype = Object.create(this.prototype);
    return f;
}


//自己实现call

Function.prototype._call = function(target){
    target.fn = this;
    let arg = Array.from(arguments).slice(1);
    let res = target.fn(...arg); //核心就是让传的对象来执行原函数
    delete target.fn;
    return res;
};

//验证
var a = {
    name : 'fu'
}
function sayName(a){
    console.log(this.name)
    console.log(arguments)
}
sayName.prototype.f = 3


//bind
var fun = sayName._bind(a,12)
console.log(fun.prototype.f)
fun(8)

//call
sayName._call(a,12,13,16)








