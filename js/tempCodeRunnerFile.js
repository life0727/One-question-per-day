// var sum = [1,2,3].reduce((accumulator,cur) =>{
//    return accumulator += cur
// })

// var sum1 = [1,2,3].reduce((accumulator,cur) =>{
//     return accumulator + cur
// },0)
// console.log(sum)
// console.log(sum1)

// //求数组最大值
// var maxSum = [1,2,3,8,2].reduce((accumulator,cur) =>{
//     return accumulator > cur ? accumulator : cur
// })

// var maxSum1 = [1,2,3,8,2].reduce((accumulator,cur) =>{
//     return Math.max(accumulator,cur)
// })
// console.log(maxSum)
// console.log(maxSum1)

// const [a,...b] = [1,2,3]
// console.log(a,b)

// const {c,d,e} = {"c":'ccc',"d":'ddd',"e":'eee'}
// console.log(c,d,e)


// function asy (cb) {
//    setTimeout(()=>{
//       cb()
//    },2000)
// }

// asy(()=>{
//    console.log(41)
// })

// axios 和 fetch 就是一个把ajax封装成了promise对象的包
/* async function someGet(){
   let res = await fetch('./url').then(data => data.data)
   let res = await axios.get('./url').then(data => data.data)
   console.log(res)
} */