//柯里化  利用闭包形成不销毁的作用域原理，延迟执行，返回一个接受剩余参数的函数。待到函数真正需要求值的时候之前所有参数会被一次性求值。 f(a,b,c) => fn(a)(b)(c)

function add (a,b,c){
    return a + b + c;
};

//curry
var curry = function (fn,arg = []){
    return function(){
        let args = [...arg,...Array.from(arguments)]; //存储的参数
        if(args.length < fn.length){
            return curry.call(null,fn,args)
        }else{
            return fn.call(null,...args) //直接执行
        }
    }
}

//test curry
var testCurry = curry(add);
console.log(testCurry(1)(2)(3)) //6
console.log(testCurry(1,2)(3)) //6
console.log(testCurry(1)(2,3)) //6


//反柯里化 作用创建一个应用范围更广的函数，使本来作为特定对象所拥有的功能函数可以被任何对象来使用。 obj.fn(a,b) => fn(obj,a,b)

//unCurry 
var unCurry = function (fn) {
    return function () {
        return fn.call(...Array.from(arguments))  //就是让传入的方法在返回的函数的参数上来调用
    }
}

var testUnCurry = unCurry(Object.prototype.toString)

console.log(testUnCurry(1)) //[object Number]
console.log(testUnCurry('1')) //[object String]

