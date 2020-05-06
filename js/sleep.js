//一 利用伪死循环阻塞主线程 原理js单线程的。缺点：死循环电脑咖色
// function _sleep(time){
//     const now = +new Date();
//     while(+new Date() - now < time){
//        continue;
//     }
// }

// console.log('pre',+new Date());//pre 1588750450434
// _sleep(2000);
// console.log('next',+new Date());//next 1588750452439

//打印结果： pre 1588750450434
//          next 1588750452439




//二 定时器 setTimeout  事件机制原因其实未阻塞 其实不算sleep
// function _sleep(callback,time){
//     setTimeout(callback,time)
// }

// console.log('pre',+new Date());
// _sleep(() => {
//     console.log('next',+new Date())
// },2000);
// console.log('do something',+new Date())

//打印结果：pre 1588750777211
//          do something 1588750777215
//          next 1588750779217



//三 promise await 来阻塞 最合理的
// function _sleep(time){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,time)
//     })
// }

// async function run(){
//     console.log('pre',+new Date());
//     await _sleep(2000)
//     console.log('next',+new Date())
// }

// run()

//打印结果：pre 1588751342369
//         next 1588751344376