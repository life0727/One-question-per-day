//前言： 在做高德地图可视化的时候；经常会遇到海量级数据处理。为了提高用户交互体验,从而实现时间分片方法 => timeSlice
<ul id="container"></ul> //写一个容器标签测试展现效果

function createPoints(num) { //创建测试数据方法
    let data = [];
    for (let i = 0, len = num; i < len; i++) {
        data.push({
            position: [
                (Math.random() > 0.5 ? 1 : -1) * Math.random(),
                (Math.random() > 0.5 ? 1 : -1) * Math.random()
            ]
        });
    }
    return data;
}
let DATA = createPoints(999999); //创建999999个假坐标点
//console.log(DATA)

/**
 *
 * @param data //传入的总数居Array
 * @param callBack //回调函数, 参数为每个切好的子数组Array
 * @param onceNumber //每个切片的大小 默认为200
 */

function timeSlice(data = [],callBack,onceNumber = 200){ //时间分片核心方法
    if(!data || !data.length) return;
    let index = 0;//当前数据的指针
    const total = data.length;//数据总数
    function loop(curTotal,curIndex){
        if(curTotal <= 0) return;
        let pageCount = Math.min(curTotal,onceNumber);//每页多少条 
        window.requestAnimationFrame( _ =>{ //屏幕刷新率 代替setTimeout间隔来减少白屏次数
            callBack(data.slice(curIndex,curIndex + pageCount));//返回切片数据
            loop(curTotal - pageCount,curIndex + pageCount)
        })
    }
    loop(total,index);
}
let ul = document.getElementById('container');

//test时间分片 结果:秒出 体验很好
timeSlice(DATA,(item)=>{
    item.length && item.forEach(i => {
    let li = document.createElement('li');
        li.innerText = i.position
        ul.appendChild(li)
    })
},200)

//test一次性导入 结果：十秒到二十秒白屏时间 体验极差
// DATA.forEach(i =>{
//     let li = document.createElement('li');
//         li.innerText = i.position
//         ul.appendChild(li)
// })
