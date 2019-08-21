const arr = ['1',1,22,'22','hello word',233333,6666,6666,6666];
//filter方法
// const res = arr.filter((item,index,self) =>{
//    return index == self.indexOf(item);
// })

//set方法 类似于数组，但是成员的值都是唯一的，没有重复的值。 [...new Set(array)]
//const res = [...new Set(arr)]
 
//循环遍历
const res = []; 
for(let i of arr){
    res.indexOf(i) == -1 && res.push(i)
}

console.log(res)

