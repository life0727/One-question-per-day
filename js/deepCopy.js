function deepCopy(arg) {
	let filterArr = ['[object Array]','[object Object]'];
    let res = filterArr.includes(Object.prototype.toString.call(arg)) ? Array.isArray(arg) ? [] : {} : arg;
    console.log(Object.keys(arg))
    // Object.keys(arg).forEach((item) => {
    //     filterArr.includes(Object.prototype.toString.call(arg[item])) ? res[item] = deepCopy(res[item]) : res[item] = arg[item]
    // })
    for(let i in arg){
        res[i] = filterArr.includes(Object.prototype.toString.call(arg[i])) ? deepCopy(arg[i]) : arg[i]
    }
    return res;
}
var a = {
    name:'fu',
    money:{'rmb':100,'$':999},
    reg:new RegExp(/^1(3|4|5|7|8)\d{9}$/),
    fun:function(){},
    err: new Error('我是一个错误'),
    date:new Date(0)
};
var b = deepCopy(a)
//console.log(b)
console.log(a.money === b.money) //false
console.log(a.reg === b.reg) //true
console.log(a.date === b.date) //true
console.log(a.fun === b.fun) //true
console.log(a.err === b.err) //true

