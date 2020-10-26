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
//3.client可以展示广播信息，增加玩家，存储红蓝队伍，实现团灭既胜利（一方队伍玩家全die）

//玩家 - 角色对象role
class Palyer {
    constructor(name,team){
        this.name = name
        this.team = team
        this.state = 'alive' // 'alive' , 'die', 'disConnenced'
        this.client = Client.shareInstance();
        this.client.add(this)
    }

    win(){
        console.log(`${this.name}(${this.team}色方)--胜利了`)
    }

    lose(){
        console.log(`${this.name}(${this.team}色方)--失败了`)
    }

    die(){
        this.state = 'die'
        this.sendAllMessage(`${this.name}已被击杀`)
        this.client.palyerDied(this)
    }

    disConnenced(){
        this.state = 'disConnenced'
        this.sendMessage(`${this.name}掉线了`)
    }

    sendMessage(message){
        this.client.receiveMessage(this,message)
    }

    sendAllMessage(message){
        this.client.receiveMessage(this,message,true)
    }

    getOwnTeam(hasMyself){
        return hasMyself ? this.client.teams[this.team] : this.client.teams[this.team].filter(item => item.name != this.name)
    }

    getEnemyTeam(){
        return this.client.players.filter(item => item.team !== this.team )
    }

    showMessage(message){
        console.log(message)
    }

    checkClient(){
        console.log(this.client)
    }
}

//平台 - 命令对象
class Client {
    teams = {} //队伍
    players = [] //所有玩家

    static shareInstance() {
        if (!this.instance) {
            this.instance = new Client();
        }
        return this.instance;
    }

    add(player){
        this.players.push(player)
        if(player.team in this.teams){
            this.teams[player.team].push(player)
        }else{
            this.teams[player.team] = [player]
        }
    }

    receiveMessage(player,message,isAll){
        if(isAll){
            this.players.forEach(item => {
                item.showMessage(`${item.name}收到来自${player.name}: ${message}`)
            });
        }else{
            player.getOwnTeam().forEach(item => {
                item.showMessage(`${item.name}收到来自${player.name}: ${message}`)
            })
        }
    }

    palyerDied(player){
        const myTeam = player.getOwnTeam(true);
        const enemyTeam = player.getEnemyTeam();
        const isMyTeamLose = myTeam.every(item => item.state === 'die');
        const isEnemyTeamLose = enemyTeam.every(item => item.state === 'die');
        if(isMyTeamLose && !isEnemyTeamLose){
            myTeam.forEach(item => item.lose())
            enemyTeam.forEach(i => i.win())
        }if(!isMyTeamLose && isEnemyTeamLose){
            myTeam.forEach(item => item.win())
            enemyTeam.forEach(item => item.lose())
        }
    }
}

const aixi = new Palyer('艾希','red')
const ez = new Palyer('伊泽','red')
const vn = new Palyer('薇恩','red')
const kasha = new Palyer('卡莎','red')
const jin = new Palyer('烬','red')

const dema = new Palyer('盖伦','blue')
const lakesi = new Palyer('拉克丝','blue')
const huangzi = new Palyer('皇子','blue')
const zhaoxin = new Palyer('赵信','blue')
const galiao = new Palyer('加里奥','blue')

//aixi.checkClient()

aixi.sendAllMessage('你们好')
ez.sendMessage('干翻他们')
vn.disConnenced()

dema.die()
lakesi.die()
huangzi.die()
zhaoxin.die()
galiao.die()

// aixi.die()
// ez.die()
// vn.die()
// kasha.die()
// jin.die()


//优点
//1.符合最少知识法则（一个对象尽可能少的了解多余对象）。
//2.降低对象和模块的耦合度（避免互相引用等）。
//3.使对象之间的关系更加简单（多对多变为一对多）。
