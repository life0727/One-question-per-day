//根据子元素获取父级元素
const json = [{
    name:'苹果',
    id:'1',
    children:[{
        name:'苹果1-1',
        id:'1-1',
        children:[{
            name:'苹果1-1-1',
            id:'1-1-1',
        }]
    }]
},{
    name:'梨',
    id:'2',
    children:[{
        name:'梨2-1',
        id:'2-1',
        children:[{
            name:'梨2-1-1',
            id:'2-1-1',
            children:[{
                name:'梨2-1-1-1',
                id:'2-1-1-1',
            }]
        },{
            name:'梨2-1-2',
            id:'2-1-2',
        }]
    },{
        name:'梨2-2',
        id:'2-2',
        children:[{
            name:'梨2-2-1',
            id:'2-2-1',
        }]
    }]
}]

//json 树状结构 child 目标子元素  key 查找字段
function findParents(json,child,key){
    var parentIds = [],
        index = 0,
    hasParentId = function loop(json, index){
        return json.some((item)=>{
            if(item[key] === child[key]){
                parentIds = parentIds.slice(0, index)
                return true
            }else if(Array.isArray(item.children)){
                parentIds[index] = item
               // parentIds[index] = item[key]
                return loop(item.children, index+1)
            }else{
                return false
            }
        })
    }(json, index)
    return hasParentId ? parentIds : []
}

const pars = findParents(json,{id:'2-1-1-1'},'id')

console.log('pars',pars)
//pars 父级集合
//pars[0]  最高父级
//pars[pars.length - 1] 最低父级


