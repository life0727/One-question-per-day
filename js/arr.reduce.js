//语法
//Array.reduce((accumulator,cur,index,arr) =>{},init)   
//accumulator:累计器，累计上一次回调的返回值，或者init
//cur:处理当前元素的value
//index（可选）:处理当前元素的索引，如果有init则起始索引为0，否则索引为1（因为没有init第一个累计器的值为数组的第一个value）
//init（可选）:作为累计器的第一个值，如果没有的话默认使用数组的第一个元素

//数组求和
var sum = [1,2,3].reduce((accumulator,cur) =>{
   return accumulator += cur
})

var sum1 = [1,2,3].reduce((accumulator,cur) =>{
    return accumulator + cur
},0)
console.log(sum)
console.log(sum1)

//求数组最大值
var maxSum = [1,2,3,8,2].reduce((accumulator,cur) =>{
    return accumulator > cur ? accumulator : cur
})

var maxSum1 = [1,2,3,8,2].reduce((accumulator,cur) =>{
    return Math.max(accumulator,cur)
})
console.log(maxSum)
console.log(maxSum1)

//数组去重
var noRepeatArr = [1,2,3,8,2].reduce((accumulator,cur) =>{
    accumulator.indexOf(cur) == -1 && accumulator.push(cur)
    return accumulator
},[])
console.log(noRepeatArr)