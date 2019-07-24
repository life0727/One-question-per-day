
var arr = [1, [2, [3, 4]]];

//数组的flat函数
//console.log(arr.flat(n)) //n 表示扁平数组深度 1,2,3,Infinity 注：兼容较差 edge，ie不兼容

//自己写flater函数 递归
/* function flater(arg){
    var res = [];
    for(let i of arg){
        if(Array.isArray(i)){
            res = [...res,...flater(i)]
            //console.log(res)
        }else{
            res.push(i)
        }
    }
    return res;
}

console.log(flater(arr)) */


Array.prototype._flat = function(){
    return [].concat(...this.map(item => Array.isArray(item) ? item._flat() : [item]))
}
console.log(arr._flat())