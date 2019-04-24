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