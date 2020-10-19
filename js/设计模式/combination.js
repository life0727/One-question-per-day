//组合模式

//定义
//又叫部分-整体模式。用来描述具有层次结构的部分与整体关系

//目的
//使用户对单个对象和组合对象的访问使用具有一致性

//构成角色
//叶子类。其下没有多余的分支，也是遍历最小的子单位
//树枝类。组合树枝节点和叶子节点形成一个树形结构。组合模式的重点就在树枝类。

//特点
//1.表示“部分-整体”的层次结构，生成“树叶型”结构。
//2.一致操作性，树叶对象对外接口保持一致。所以组合不是继承，并不是父子对象。叶对象不是继承树对象属性和方法。
//3.自上而下的请求流向。从树对象传递给树对象或者叶子对象。

//场景
//实现一个文件目录。约定如下：
//1.文件夹folder和文件file都有扫描和删除功能。
//2.folder有增加foler和file功能

//文件底层类
class Base {
    parent = null

    remove(){
        if(!this.parent) return //根目录
        const del = this.parent.files.findIndex(item => item == this)
        if(del !== -1){
            this.parent.files.splice(del,1)
        }
    }
}

// 文件类
class File extends Base {
    constructor(name){
        super()
        this.name = name || 'File'
    }

    scan(){
        console.log('扫描文件:',this.name)
    }

}

//文件夹类
class Folder extends Base {
    constructor(name){
        super()
        this.name = name || 'Folder'
        this.files = []; //下面的文件和文件夹
    }

    scan(){
        console.log('扫描文件夹',this.name)
        this.files.forEach(item => {
            item.scan()
        })
    }

    add(file){
        file.parent = this;
        this.files.push(file)
    }

}

const home = new Folder('根目录')
const folder1 = new Folder('文件夹1')
const folder2 = new Folder('文件夹2')

const file1 = new File('文件1')
const file2 = new File('文件2')
const file5 = new File('文件5')

folder1.add(folder2)
folder1.add(file1)

folder2.add(file2)

home.add(folder1)
home.add(file5)

//home.scan()
//folder1.scan()
//folder2.scan()
//file1.scan()

// file2.remove()
// folder2.scan()

// folder2.remove()
// folder1.scan()

//folder1.remove()
home.scan()

//优点
//1.高层模块调用简单。提供了统一的对外接口。高层模块不必关心自己处理的是单个对象还是整个组合结构，简化了高层模块的代码。
//2.节点自由增加，扩展性高。符合开发封闭原则
