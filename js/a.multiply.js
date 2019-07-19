const a = [1,2,3,4,5];
a.multiply();
console.log(a)//[1,2,3,4,5,1,4,9,16,25];
//实现multiply方法

Array.prototype.multiply = function(){
    [...this].forEach(item => {this.push(item*item)})  
}

//一层浅拷贝数组：[...arr]。对象或者数组：Object.assign({},obj||arr)