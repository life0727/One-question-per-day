let data = [{
    id:1,
    name:"北京"
},{
    id:1,
    name:"天津",
    children:[{
        id:1,
        name:"西青"
    },{
        id:1,
        name:"和平",
        children:[{
            id:1,
            name:"和平一"
        },{
            id:1,
            name:"和平二"
        }]
    }]
}];
//写一个函数将数据内的key值name和children相应的替换成lable和city
var filtersArr = ['[object Object]','[object Array]']
function deepRename(arg){
    for(let i in arg){
        if(filtersArr.includes(Object.prototype.toString.call(arg[i]))){
            deepRename(arg[i])
        }else{
            arg['name'] ? arg['lable'] = arg['name'] : ''
            arg['children'] ? arg['city'] = arg['children'] : ''
            delete arg['name']
            delete arg['children']
        }
    }
    return arg
}
console.log(deepRename(data))