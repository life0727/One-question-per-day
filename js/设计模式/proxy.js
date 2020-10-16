//代理模式

//定义
//为其它对象提供一种代理以控制这个对象的访问。

//分类
//1，保护代理。控制不同权限的对象对目标对象的访问，如明星经纪人是明星的代理。
//2，缓存代理。把一些开销很大的对象（的结果）提供缓存，延迟到真正需要它的时候才去创建，如下面的计算代理（缓存计算后的结果，如果参数跟以前相同不用运算了）。

//构成角色
//1，目标对象类。含有具体的业务逻辑。
//2，代理类。提供代理对象的使用接口，把请求预先处理或直接转接给对象。

//场景 
//实现一个运算类。约定如下：
//1，运算类提供加法对象和乘法对象的访问接口。
//2，不能直接访问加法对象和乘法对象。
//3, 要实现运算缓存。当参数一样时返回以前的运算结果

class Add { //目标对象类
    add(...arg){
        console.log('执行加法运算 =>' ,arg)
        return arg.reduce((prev,cur) => prev + cur,0)
    }
}

class Mult { //目标对象类
    mult(...arg){
        console.log('执行乘法运算 =>' ,arg)
        return arg.reduce((prev,cur) => prev * cur,1)
    }
}

class Calc { //代理运算类
    cache = [];  //运行结果缓存

    constructor(calcFunc){
        this.calcFunc = calcFunc;
    }

    calc(...arg){ //提供代理对象的使用接口
        const key = arg.toString()
        if(key in this.cache){
            console.log('读取缓存结果',this.calcFunc.name)
            return this.cache[key]
        }else{
            return this.cache[key] = this.calcFunc(...arg)  //把请求转接给目标对象
        }
    }
}

const add = new Add()
const mult = new Mult()

let calc = new Calc(add.add)

console.log(calc.calc(1,2,3))
console.log(calc.calc(1,2,3))
console.log(calc.calc(1,2,3,2))
console.log(calc)

calc = new Calc(mult.mult)
console.log(calc.calc(1,2,3))
console.log(calc.calc(1,2,3))
console.log(calc.calc(1,2,3,2))
console.log(calc)

//优点
//1.保护对象，避免直接暴露
//2.缓存结果，优化性能，减少开销很大的对象。
//3.模块职责单一清晰。代理者决定是否执行，代理对象负责具体业务。
