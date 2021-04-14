//一句话概括promise
`promise是一个异步编程解决方案，避免了层层嵌套的回调函数`

//基本实现  
`promise 是一个构造函数，接受一个函数（通常是异步操作）作为参数，该函数会指定异步处理。{
                                                                                 '处理结果正常' : '调用resolve函数'，
                                                                                 '处理结果失败' : '调用reject函数'
                                                                                }`
// var promise = new Promise(function(resolve, reject) {
//     // ... some code
//     if (/* 异步操作成功 */){
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });

//特点
`1.对象状态(penging,fulfilled,rejected)不受外界影响。只有异步操作的结果才能决定当前是哪一个状态，任何其他操作都改变不了这个状态
 2.状态改变后就不会再变，任何时候都能可以得到这个结果。`

//缺点
`1.一旦新建就立即执行，无法取消
 2.如果不设置回调函数，promise发生错误，不会反映到外部
 3.当处于pending时，不知道进展到那一个状态（是刚开始还是即将完成）`

//对于第二种解决方案
// bad
// promise
// .then(function(data) {
//   // success
// }, function(err) {
//   // error
// });

// good `可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）` 
// promise
// .then(function(data) { //cb
//   // success
// })
// .catch(function(err) {
//   // error
// });

//api

`then和reject 都是异步操作完成（promise状态改变后）的回调函数。区别一个是fulfilled一个是rejected，一个不可选一个可选`
`catch 用于指定发生错误时的回调函数.then(null, rejection)的别名`
`all all方法用于将多个 Promise 实例(p1,p2,p3)，包装成一个新的 Promise 实例。并且当这三个实例全部变成fulffilled或者有一个变成rejdcted才会调用all的回调` //var p = Promise.all([p1, p2, p3]); 
`race 和all的用法相同 不过是当任何一个实例状态发生变化时他就会调用race的回调。其它没有执行完毕的异步操作仍然会继续执行！`

//工作中实例
// async function getNode(){
//     return $.getJSON('./static/json/node.json');
// }
// async function getEdge(){
//     return $.getJSON('./static/json/edge.json');
// }
// Promise.all([getNode(), getEdge()]).then((data) => {
//     node = filterEdgeNum(data[0],filterNum)
//     edge = filterEdgeNum(data[1],filterNum)
// })    

function Gen(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(time)
        }, time)
    })
}

// let arr = [2000,1000,4000,3000]
// async function test() {
    
//     for await (let item of arr) {
//         console.log(Gen(item), Date.now())
//     }
// }
async function test() {
    let arr = [Gen(2000), Gen(100), Gen(3000)]
    for await(let item of arr) {
      console.log(Date.now(), item)
    }
    console.log('wadwa')
  }
test().then(_=>{
    console.log('da')
})


///
getNotice_type(){
    return new Promise((resolve) => {
        this.$fetch({
            url: `${this.$baseUrl}/system/dict/data/list?dictType=sys_notice_type`,
            success: (data) => {
                resolve(data)
            }
        })
    });
},
getNotice_typeAndSub_type(){
    const getNotice_type = this.getNotice_type();
    const getSub_type = new Promise((resolve) => {
        this.$fetch({
            url: `${this.$baseUrl}/system/dict/data/list?dictType=badcase_sub_type`,
            success: (data) => {
                resolve(data)
            }
        })
    });
    const getAll = Promise.all([getNotice_type, getSub_type]);
    getAll.then((data)=>{
        console.log('getAll_type',data)
        this.form.noticeTypeOptions = data[0].rows;
        this.form.subTypeOptions = data[1].rows;
    })
    .catch(e => this.$message.error(e));
}
