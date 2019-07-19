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


// function fun(nums) {
//     nums = nums.sort(function(a, b) { return a - b; });
    
//     let i, j, k, n = nums.length,res = false;
    
//     for (i = 0; i < n; ++i) {
//         if (i > 0 && nums[i] === nums[i-1]) continue;
        
//         for (j = i + 1; j < n; ++j) {
//             if (j > i + 1 && nums[j] === nums[j-1]) continue;
            
//             for (k = j + 1; k < n; ++k) {
//                 if (k > j + 1 && nums[k] === nums[k-1]) continue;
                
//                 if (nums[i] + nums[j] - nums[k] === 0) res = true ;
//             }
//         }
//     }
//     console.log(res);
//     return res;
// };
// fun([2,99,3,5])
// fun([1,50,0,5])

// const a = [];
// for(var i = 0;i<10;i++){
//     a.push(function(){
//         return console.log(i)
//     })
// }

// a[0]()
// a[1]()


// var m = true
// setTimeout(function(){
//     m = false
// },3000)
// while(m){}
// console.log('awd')