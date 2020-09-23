class eventEmitter { //https://juejin.im/post/6844903850105634824
    list = {};

    on(eventName,fn){
        if(!this.list[eventName]){
            this.list[eventName] = []
        }
        this.list[eventName].push(fn)
    }

    once(eventName,fn){
        this.on(eventName,_fn)
        function _fn(...args){
            //console.log('fn.name',fn.name)
            fn.apply(this,args)
            this.off(eventName,'_fn')
        }
    }

    off(eventName,fnName){
        if(this.list[eventName]){
            if(!fnName){
                this.list[eventName].length = 0
                delete this.list[eventName]
            }else{
                this.list[eventName] = this.list[eventName].filter(item => item.name !== fnName);
                
            }
            
        }
    }

    emit(...arg){
        const fnArr = this.list[arg[0]];
        if(!fnArr || !fnArr.length){
            return
        }
        fnArr.forEach(item => {
            item.apply(this,arg.slice(1))
        })
    }



}

let myEvEmitter = new eventEmitter();

export default myEvEmitter

/*
myEvEmitter.on('talk',argu => {
    console.log('talk',this,argu)
})

myEvEmitter.once('shop',shopFun1)
//myEvEmitter.on('shop',shopFun1)
myEvEmitter.on('shop',shopFun2)

myEvEmitter.off('talk')
//myEvEmitter.off('shop',shopFun1)

myEvEmitter.emit('talk',{talk:'我在说话'})
myEvEmitter.emit('shop',{shop:'我买苹果'})
myEvEmitter.emit('shop',{shop:'我买苹果'})

function shopFun1(arg){
    console.log('小明的shopFun1',arg)
    //console.log('小明的shopFun1',this,arg)
}
function shopFun2(arg){
    console.log('阿蒙的shopFun2',arg)
}
*/
