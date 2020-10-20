// 命令模式

//定义
//1.请求以命令的形式包裹在对象（命令对象）中，并传递给调用对象。
//2.调用对象寻找可以处理该命令的接受对象，并把该命令传递给接受对象。
//3.接受对象执行命令。

//目的
//请求发布者和请求接收者解耦

//构成角色
//1.发布者invoker。（调用命令对象，发布命令。不知道谁执行何时执行）。
//2.接收者receiver。（实现命令对象的处理调用请求。命令行为的真正实现者）。
//3.命令对象command.（接受命令，调用接收者处理接口来处理发布者的请求）。

//特点
//1.发布者invoker和接收者receiver各自独立，请求封装成命令对象command。
//2.流程为发布者调用命令对象发布命令，命令对象对象调用接收者对应执行接口执行。
//3.命令对象拥有更长的生命周期，接收者引用在命令对象的属性中。使得程序执行时可以任意时刻调用接收者对象的属性和方法。因此命令对象可以对请求进一步管控处理。如实现延时，预定，排队，撤销功能。

//场景
//实现一个下单功能。约定如下：
//1.用户可以在平台下单多种如：下单买apple，买banana
//2.用户可以在平台上再次执行上一次下单结果
//3.售货员根据不同命令打印不同结果

//用户 - 发布者
class Invoker {
    constructor(command){
        this.command = command
    }

    buyOrder(goods){
        this.command.execute(goods)
    }

    buyPreOrder(){
        this.command.executePreOrder()
    }
}

//平台 - 命令对象
class Command {
    constructor(receiver){
        this.receiver = receiver;
        this.orderList = []
    }

    execute(goods){
        this.orderList.push(goods)
        this.receiver.sell(goods)
    }

    executePreOrder(){
        const lastGoods = this.orderList.pop();
        if(!lastGoods){
            console.log('暂无订单')
            return
        }
        this.receiver.sell(lastGoods)
    }
}

//售货员 - 接收者
class Receiver {
    sell(goods){
        console.log(`收到${goods}订单`)
    }   
}

const receiver = new Receiver()
const command = new Command(receiver)
const invoker = new Invoker(command)

invoker.buyOrder('apple')
invoker.buyOrder('banana')

invoker.buyPreOrder()
invoker.buyPreOrder()
invoker.buyPreOrder()

//优点
//1.发布者与实现者解耦。
//2.命令对象可以对请求进一步管控处理。如实现延时，预定，排队，撤销功能。
