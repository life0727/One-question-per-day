//责任链模式

//定义 
//避免请求发送者与接收者耦合在一起，让多个对象都有可能接受请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理他为止。

//场景
//有一个请假的例子，约定如下：
// 请假 1 天时，需由部门副经理 ViceManager 审批。
// 请假 2 - 3 天时，需由部门副经理 到 部门经理 Manager 审批。
// 请假 4 - 5 天时，需由部门副经理 到 部门经理 到 公司副总经理 ViceBoss 审批。
// 请假 5 天以上时，需由部门副经理 到 部门经理 到 公司副总经理 到 公司总经理 Boss 审批。

//不使用责任链

class RequestHandle {
    constructor (name, day, reason) {
        this.name = name
        this.day = day
        this.reason = reason
    }

    postRequest(){
        if(this.day <= 1){
            this.ViceManagerHandle()
        } else if(this.day <= 3){
            this.ManagerHandle()
        } else if(this.day <= 5){
            this.ViceBossHandle()
        } else{
            this.BossHandle()
        }
    }

    ViceManagerHandle(){
        console.log('部门副经理签字')
    }

    ManagerHandle(){
        this.ViceManagerHandle()
        console.log('部门经理签字')
    }

    ViceBossHandle(){
        this.ManagerHandle()
        console.log('公司副总经理签字')
    }

    BossHandle(){
        this.ViceBossHandle()
        console.log('公司总经理签字')
    }
}

// const req = new RequestHandle('fqm',5,'结婚')
// req.postRequest() 
// 部门副经理签字
// 部门经理签字
// 公司副总经理签字
// 公司总经理签字

//缺点 1，每个节点耦合严重。2，流程顺序固定，不好重组/修改。3，请求和处理没分开，没法复用


// 使用责任链

//两个角色
//1，定义处理者类Handler。必须要有请求的处理方法(抽象)postRequest 和 定义的下一个链的处理者setNext
//2, 定义实际处理者。需要定义自己的能够处理任务的级别 和 具体处理的任务

class Handler { //处理者类
    setNext(handler) {
        this.next = handler;
    }

    postRequest(){
        console.log('正在处理中')
    }
}

class ViceManager extends Handler { //实际处理者 -- 部门副经理
    name = '部门副经理'
    level = 1;

    postRequest(request){
        if(request.day <= this.level){
            console.log('流程到部门副经理签字完成')
        }else{
            this.next.postRequest(request)
        }
    }
}

class Manager extends Handler{ //实际处理者 -- 部门经理
    name = '部门经理'
    level = 3;

    postRequest(request){
        if(request.day <= this.level){
            console.log('流程到部门经理签字完成')
        }else{
            this.next.postRequest(request)
        }
    }
}

class ViceBoss extends Handler { //实际处理者 -- 公司副总经理
    name = '公司副总经理'
    level = 5;

    postRequest(request){
        if(request.day <= this.level){
            console.log('流程到公司副总经理签字完成')
        }else{
            this.next.postRequest(request)
        }
    }
}

class Boss extends Handler { //实际处理者 -- 公司总经理
    name = '公司总经理'
    //level = 999999999;

    postRequest(){
        console.log('流程到公司总经理签字完成')
    }
    
    // postRequest(request){
    //     if(request.day <= this.level){
    //         console.log('流程到公司副总经理签字完成')
    //     }else{
    //         this.next.postRequest(request)
    //     }
    // }
}

const viceManager = new ViceManager();
const manager = new Manager();
const viceBoss = new ViceBoss()
const boss = new Boss()

//创建职责链
viceManager.setNext(manager)
manager.setNext(viceBoss)
viceBoss.setNext(boss)

class Request { //请求类
    constructor (name, day, reason) {
        this.name = name
        this.day = day
        this.reason = reason
    }
}

const request1 = new Request('fqm',1,'dosome')
const request2 = new Request('fqm',3,'dosome')
const request3 = new Request('fqm',5,'dosome')
const request4 = new Request('fqm',10,'dosome')

// viceManager.postRequest(request1)
// viceManager.postRequest(request2)
// viceManager.postRequest(request3)
viceManager.postRequest(request4)

  
