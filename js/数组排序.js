var arr = [4,2,3,8,9];
//sort
 
// let res = arr.sort((a,b)=> a-b);
// console.log(res) //[ 2, 3, 4, 8, 9 ]

//循环遍历
// let res = [];
// while(arr.length){
//     let minValue = Math.min(...arr);
//     res.push(minValue);
//     arr.splice(arr.indexOf(minValue),1);
// }
// console.log(res) //[ 2, 3, 4, 8, 9 ]

//冒泡排序
function bubble (arr){
    for(let i = 0;i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            console.log(arr[j + 1])
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubble(arr))