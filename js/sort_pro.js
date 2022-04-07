//目的是把data按照sortKey数组从左到右的优先级排序

const data = [{
    name:'a',
    code:10,
    value:10,
    age:22
},{
    name:'b',
    code:10,
    value:9,
    age:22
},{
    name:'c',
    code:12,
    value:12001,
    age:20
},{
    name:'d',
    code:10,
    value:1,
    age:10
},{
    name:'e',
    code:13,
    value:12001,
    age:10
},{
    name:'f',
    code:13,
    value:12001,
    age:8
},{
    name:'f',
    code:10,
    value:9,
    age:8
}]

let sortKey = ['code','value','age'] //优先级从左到右

// 方法一

const strFun = (a,b) => {
    let str = '';
    sortKey.forEach((i,index) => {
        if(index === 0){
            str += `if(a['${i}'] !== b['${i}'] ){
                console.log('1111',a['${i}'] )
                return a['${i}'] - b['${i}'] 
            }`
        }else if(index === sortKey.length - 1){
            str += `else{
                return a['${i}'] - b['${i}']
            }`
        }else{
            str += `else if(a['${i}'] !== b['${i}']){
                return a['${i}'] - b['${i}']
            }`
        }
    })
    return str
 }

const conmpartStr = () =>{
    return `
    data.sort((a,b)=>{
        return (() => {${strFun()}})()
    })`
}

eval(conmpartStr())
console.log('data',data)

//方法二
const strFun = () => {
    let str = '(a,b) => {'
    sortKey.forEach((i,index) => {
        if(index === 0){
            str += `if(a['${i}'] !== b['${i}'] ){
                console.log('1111',a['${i}'] )
                return a['${i}'] - b['${i}'] 
            }`
        }else if(index === sortKey.length - 1){
            str += `else{
                return a['${i}'] - b['${i}']
            }`
        }else{
            str += `else if(a['${i}'] !== b['${i}']){
                return a['${i}'] - b['${i}']
            }`
        }
    })
    str += '}'
    return str
}


// const str = strFun('a','b')
// console.log('STR',str)

const conmpartStr = () =>{
    return `
    data.sort((a,b)=>{
        //直接把 STR 打印出来粘到这里的话运行就没问题了
       return (${strFun()})(a,b)
    })`
}
eval(conmpartStr())
console.log('data',data)
