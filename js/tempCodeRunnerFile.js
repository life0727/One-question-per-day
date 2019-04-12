// function maxQueter(arr){
//   let _arr = [...arr];
//   let que;
//   let resArr = []
//   arr.forEach((item,index,self) => {
//     if(item >= Math.max(..._arr.slice(index,arr.length))){
//       que = [...self.slice(index,self.length)]
//       resArr.push(que)
//       return;
//     }else if(item < Math.max(..._arr.slice(index,arr.length))){
      
//       if(self.lastIndexOf(item) !== index){
//         console.log(item)
//         que = [..._arr.slice(index,self.lastIndexOf(item))]
//         resArr.push(que)
//         arr.splice(index,self.lastIndexOf(item) - index)
//       }else{
//         que = [item]
//         resArr.push(que)
//         arr.splice(index,1)
//       }
//     }
//   });
//   console.log(resArr)
//   return '最大块数：' + resArr.length
// }
// //maxQueter([1,8,2,3,6,2,7])
// console.log(maxQueter([1,2,3,4,1,2]))

// function define(url,timeOut = 200,option) {
//     console.log(timeOut)
// }

// define()

// let objectNumArr = ['a','a','z','3','3','3','b','b','c','c','c','c','d'];
// let obj = {};
// objectNumArr.forEach((item) =>{
//     if(obj[item] == undefined){
//         obj[item] = 1
//     }else{
//         obj[item] += 1;
//     }
// })

// let sortKey = Object.keys(obj).sort((a,b)=>{
//     return obj[a] - obj[b]
// })
// console.log(sortKey)
// let res = new Map();
// sortKey.forEach(item =>{
    
//     res.set(item,obj[item])
// })

// console.log(res)

// function strMapToObj(strMap) {
//     let obj = Object.create(null);
//     for (let [k,v] of strMap) {
//       obj[k] = v;
//     }
//     return obj;
// }

// console.log(strMapToObj(res))
// var generate = function(numRows) {
//     let res = [];
//     for(let i = 0; i < numRows;i++){
//         let arr = [];
        
//         arr[0]  = 1;
//         arr[i] = 1
//         arr.length = i+1
//         if(i !== 0 && i !== 1){   //3行
//             for(let j = 1 ;j < i;j++){
//                 arr[j] = res[i - j - 1][j - 1] +res[i - j - 1][j]
//                 console.log(arr[j])
//             }
//         }
     
//         res.push(arr)
//     }
//     return res;
// };
// console.log(generate(5))

// var generate = function(numRows) {
//         let res = [];
//         for(let i = 0; i < numRows;i++){
//             let arr = [];
//             arr[0] = arr[i] = 1;
//             if(i < 2 ){
//                 res.push(arr)
//             }else{
//                 for(let j = 1 ;j <= i-1;j++){
//                     arr[j] = res[i - 1][j - 1] + res[i - 1][j]
//                 }  
//                 res.push(arr)
//             }
//         }
//         return res;
//     };
//     console.log(generate(3))

// var postorder = function(root) {
//     const result = [];
//  if (!root) return result;
//  const queue = [root];

//  while(queue.length) {
//    const current = queue.shift();
//    if (current == null) continue;
//    console.log(current.val)
//    result.push(current.val);
//    queue.unshift(...current.children.reverse());
//  }
//  return result.reverse();
// };
// var res = postorder(4)
// console.log(res)