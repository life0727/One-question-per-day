var arr = [4,2,3,8,9];
//sort
 
// let res = arr.sort((a,b)=> a-b);
// console.log(res) //[ 2, 3, 4, 8, 9 ]

//循环遍历
let res = [];
while(arr.length){
    let minValue = Math.min(...arr);
    res.push(minValue);
    arr.splice(arr.indexOf(minValue),1);
}
console.log(res) //[ 2, 3, 4, 8, 9 ]