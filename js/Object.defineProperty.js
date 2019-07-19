var obj = {name:'fu'}
Object.defineProperty(obj,'name',{
    set:function(){
        console.log('我要修改了')
    }
})
obj.name = 111;

//demo => 写一个极简双向绑定
`<html>
    <input id="a"></input>
    <span id="b"></span>
</html>`
//通过数据劫持demoObj的某个属性来实现双向绑定
var demoObj = {};
Object.defineProperty(demoObj,'key',{
    set:function(newVal){
        document.getElementById('a').value = newVal;
        document.getElementById('b').innerHTML = newVal;
    },
})
document.addEventListener('keyup',function(e){
    demoObj.key = e.target.value
})
