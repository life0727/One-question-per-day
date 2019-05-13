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

//构造函数如果return基本类型则无视，如果return引用类型则return这个东西

//任何引用类型的instanceof Object 都为true 除了null

// 函数声明优先级比声明变量优先级高

//new foo().name() 先执行new 在执行name方法

//new foo.name() 先执行foo.name()再new


//