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

function define(url,timeOut = 200,option) {
    console.log(timeOut)
}

define()