// 迭代器 Iterator
//Iterator是一种机制，任何数据只要部署了Iterator接口，都可以依次遍历。
function Iterator(arr) {
    let nextIndex = 0;
    return {
        next(){
            let value = arr[nextIndex] ? arr[nextIndex] : undefined
            let done = nextIndex ++ >= arr.length ? true : false
            return {done,value}
        }
    }
}
// var or = Iterator([1,3,5,7])
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())

//********************************************************************************* */

//生成器 Generator
//返回一个迭代器的函数
// function* Generator() {
//     yield 1
//     yield 3
//     yield 5
//     yield 7
// }
function* Generator(arr) {
    for(let i of arr){ //forEach不行（yield 关键字只能用在生成器内部，用于其他任意位置都是语法错误，即使在生成器内部的函数中也不行）
        yield i
    }
}
// var or = Generator([1,3,5,7]);
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())
// console.log(or.next())

//********************************************************************************* */

//Symbol.iterator 对象上的默认迭代器可以直接[Symbol.iterator]访问
var arr = [1,2,4,7]
var or = arr[Symbol.iterator]()
console.log(or.next())
console.log(or.next())
console.log(or.next())
console.log(or.next())
console.log(or.next())

//字符串，数组，map，set，arguments，nodelist都有默认迭代器 也就是可以用for of 循环
// console.log([][Symbol.iterator] != undefined) //true
// console.log(new Map()[Symbol.iterator] != undefined)//true
// console.log(new Set()[Symbol.iterator]!= undefined)//true
// console.log(''[Symbol.iterator] != undefined)//true
// console.log({}[Symbol.iterator] != undefined)//false
// console.log(new WeakMap()[Symbol.iterator] != undefined)//false
// console.log(new WeakSet()[Symbol.iterator] != undefined)//false

//********************************************************************************* */

//给对象设置默认迭代器 使可以支持for of 循环
let obj = {
    items : [1,2,3,5],
    *[Symbol.iterator]() {
        for(let i of this.items){
            yield i
        }
    }
}
for(let i of obj){
    console.log(i)
}