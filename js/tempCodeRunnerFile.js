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
//   console.time('ww')
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
//         console.timeEnd('ww')
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
// var maxArea = function(height) {
//   let lang = height.length-1;
//   let curArea = 0;
//   for(let i = 0;i < height.length;i++){
//     let gao = Math.min(height[i],height[lang])
//     let nextArea = gao * (lang - i)
//     curArea = Math.max(curArea,nextArea)
//     for(let j = lang;j > i;j--){
//       let gao1 = Math.min(height[i],height[j])
//       let nextArea1 = gao1 * (j - i)
//       curArea > nextArea1 ? curArea = curArea : curArea = nextArea1
//     }
//   }
//   return curArea
// };
// maxArea([2,3,4,5,18,17,6])
// const add = x => y => z => x + y + z;
// var one = add(1)
// var one2 = one(2)
// var one3 = one2(3)
// console.log(one2)

//add(1,2) 3
//add(1)(2) 3
// var add = function(){
//   if(arguments.length == 2){
//     return arguments[0] + arguments[1]
//   }else if(arguments.length == 1){
//     var _arg = arguments;
//     return function(){
//       return _arg[0] + arguments[0]
//     }
//   }
// }
// console.log(add(1)(2))
// var a = 866278171
// console.log(a.toSting())
// for(let t in (866278171.toSting())){
//   if (t == '3'){jishu ++}
// }

// function isPrime(num) {
//     return  num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 6 != 0 && num % 7 != 0 && (num % 10 == 1 || num % 10 == 7 || num % 10 == 3 || num % 10 == 9 )
// }
// //console.log(Math.sqrt(707829217));
// let flag = 26605;
// var res;
// for(let i = 3; i < flag;i++){
//     if(isPrime(i) && isPrime(707829217 / i) && (i * (707829217 / i) == 707829217)){
//         res = (707829217 / i) > i ? (707829217 / i) .toString() + i.toString() : i.toString() + (707829217 / i) .toString()
//     }
// }
// console.log(Number(res))
// var arr = [1, [2, [3, 4]]];

// const flater = function(arg) {
//     let res = [];
//     for(let i of arg){
//         Array.isArray(i) ? res=  [...res,...flater(i)]: res.push(i)
//     }
//     return res
// }
// console.log(flater(arr))
var num = 10;
num > 10  &&console.log('aa')