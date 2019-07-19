//call,apply是每个函数都非继承来的方法
    function a() {
        return 'fuquanmeng'
    }
    console.log(a()) //fuquanmeng
    console.log(a.call(null)) //fuquanmeng
    console.log(a.apply(null)) //fuquanmeng
    console.log(a.call(undefined)) //fuquanmeng
    console.log(a.apply(undefined)) //fuquanmeng

//a() == a.call(null) = a.apply(null) = a.call(undefined) = a.apply(undefined) 所以当第一个参数为null、undefined的时候，默认指向window。

``````````````````````````````````````````````````````````````````````````````````````````

//用法:都是在特定的作用域下调用函数，也就是修改函数体内this的值，来扩充函数运行的作用域。

var obj = {
    color : 'yellow'
}
function sayColor() {
    console.log(this.color)
}
sayColor() //undefined
sayColor.call(obj) //yellow


function a() {
    this.name = 'fuquanmeng';
    this.say = function() {
        console.log(this.name)
    }
}
var exp = new a();
exp.say()
exp.say.call({name:'lili'}) //把say方法里的this指向了{name:'lili'}

``````````````````````````````````````````````````````````````````````````````````````````

//不同点：接受的第二个参数不同 第一个参数都是指向函数运行的作用域；第二个参数 call的是参数列表;apply是一个数组

function addNum(a,b){
    return a + b
}

addNum.call(null,2,3) //5
addNum.apply(null,[2,3]) //5

``````````````````````````````````````````````````````````````````````````````````````````

//应用 Math.max.apply(null,array) 可以实现array里面的最大项
//Math.max参数不支持数组

Math.max(1,2,3)  //3
Math.max.apply(null,[1,2,3]) //3  不需要对象来调用他，只是用Math.max来运算实现这个结果而已