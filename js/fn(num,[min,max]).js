//写一个函数fn(num)，获取min-max以内的随机数传入一个数组，数组内不能重复出现想同的数字，数组长度为num
function fn(num,[min,max]){
    let arr = [];
    while(num){
        let targetNum = parseInt(min + (max - min) * Math.random());
        arr.includes(targetNum) ? num ++ : arr.push(targetNum),num -- 
    }
    return arr;
}
console.log(fn(5,[0,7]))