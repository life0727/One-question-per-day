// 中介者模式

//定义
//使用一个中介对象，来实现一系列对象的交互，而不是相互引用，使对象多对多关系变为简单的一对多关系。

//目的
//接触对象与对象之间的强耦合关系

//构成角色
//1.中介者mediator。（统一定义各个角色对象的交互方法，并维护他的各个角色对象）。
//2.角色对象role。（含有中介者的引用，可以通过中介者暴露的交互方法来实现其余角色的交互）。

//特点
//1.耦合松散。中介者可以独立的改变他们之间的交互。
//2.集中控制。对象之间的交互可以通过中介者封装。多对多变为一对多。

//场景
//实现一个简单英雄联盟client。约定如下：
//1.玩家有自己名字，队伍标识，当前存活状态等。
//2.玩家可以失败，胜利，死亡，掉线，发送广播信息等
//3.client可以展示广播信息，增加玩家，存储红蓝队伍，实现团灭（一方队伍玩家全die）

//玩家 - 角色对象role
class Palyer {
    constructor(name,team){
        this.name = name
        this.team = team
        this.state = 'alive' // 'alive' , 'die', 'disConnenced'
    }

    win(){
        console.log(`${this.name}(${this.team}色方)--胜利了`)
    }

    lose(){
        console.log(`${this.name}(${this.team}色方)--失败了`)
    }

    sendMessage(message){
        receiveMessage(this,message)
    }

    sendAllMessage(message){
        receiveMessage(this,message,true)
    }

    showMessage(message){
        console.log(message)
    }
}

//平台 - 命令对象
class Client {
    teams = {} //队伍
    players = [] //所有玩家
    receiveMessage(player,message,isAll){
        if(isAll){
            this.players.fiter(i => i.name !== player.name).forEach(item => {
                item.showMessage(`${player.name}: ${message}`)
            });
        }
    }
}



//优点
//1.发布者与实现者解耦。
//2.命令对象可以对请求进一步管控处理。如实现延时，预定，排队，撤销功能。
