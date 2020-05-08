//斐波那契数列 f[n] = f[n-1] + f[n-2] (n >= 3,f[1] = 1,f[2] = 1)

//例子数组 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55

//台阶问题(同兔子问题) --- 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法

// 找规律：
// 跳三级台阶等于跳两级台阶的跳法+跳一级台阶的跳法。
// 跳四级台阶等于跳三级台阶的跳法+跳二级台阶的跳法。

//递归解法  时间复杂度T(n) = n^2 - 3n + 3; 即O(n^2)
//递归是从顶部开始将问题分解，通过解决所有分解小问题的方式，来解决整个问题。（容易栈溢出https://juejin.im/post/5c450d8ae51d45515f248214）
// function fibonacci(n){
//     if(n <= 2) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(40))  //run-time = 1328ms


//动态规划解法  可以理解成“递归的相反的技术”  时间复杂度T(n) = O(n)
//动态规划是从底部开始解决问题，将所有小问题解决掉，然后合并成整体的解决方案，从而解决掉整个大问题。

function fibonacci(n){
    if(n <= 2) return n;
    let pre = 1,
        current = 2,
        result = 0;
    for(let i = 2;i < n;i ++){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result
}
console.log(fibonacci(40)) //run-time = 212ms

//另一种动态规划解法 比较好理解 
// function fibonacci(n){
//     if(n <= 2) return n;
//     let memoryArr = [];
//     for(let i = 0;i < n;i ++){
//         memoryArr[i] = i;
//     };
//     memoryArr[0] = 1;
//     memoryArr[1] = 1;
//     for(let i = 2;i < n;i ++){
//         memoryArr[i] = memoryArr[i - 1] + memoryArr[i - 2]
//     }
//     return memoryArr[n - 1]
// }

// console.log(fibonacci(40)) //run-time = 1328ms

//扩展概念
//时间复杂度：算法执行语句的次数。可以评估为执行程序所需的时间
//空间复杂度：算法在运行过程中临时占用存储空间大小的量度。可以评估为执行程序所需的存储空间