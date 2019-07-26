//只有一个参数省略()
var f = v => v + 1;
console.log(f(2)) //3

//没有参数或者有多个参数加()
var f1 = () => 5; 
var f2 = (a,b) => a + b; 
console.log(f1()) //5
console.log(f2(2,3)) //5

//代码块多于一条语句须要加{}
var f3 = v => {
    let a = 1;
    return a + v;
}  
console.log(f3(3)) //4

//在参数和箭头之间不能换行
var f4 = a
       => a + 1;
console.log(f4(2)) //报错

//不能简单的返回对象字面量 {}会被解析成语句
var f5 = () => {a : 1};
console.log(f5()) //undefined
var f6 = () => ({a : 1})
console.log(f6())

//可以与变量解构结合使用
var f7 = ({a,b}) => a + b
console.log(f7({a:10,b:9})) //19

//绑定定义时所在父级作用域的this;call与apply改变不了this指向，只能传递参数，第一个参数会被忽略；
var obj = {
    f8 : () => this,
    f9 : function(){
        return this
    }

}
console.log(obj.f8()) //window
console.log(obj.f8.call(obj)) //window
console.log(obj.f9()) //obj

//不能作为构造函数，不能使用new关键字
var f10 = () => {
    this.name = 'fu'
}
console.log(new f10()) //报错

//没有原型对象也是因为不能作为构造函数
var f11 = () => this;
console.log(f11.prototype) //undefined

//没有arguments对象
var f12 = (arg) => arguments;
console.log(f12(1,2,3,4)) //报错

//不能用作生成器generator函数
//var f13 = *() => {yield 1} 报错