//策略模式

//定义
//定义一系列算法，把他们都封装起来。并且可以互换/组合。

//目的
//将算法的使用和实现分离开来

//构成角色
//1，策略类。含有算法的具体实现。
//2，环境类。含有策略实例对象的引用，避免直接访问算法。拥有执行算法的能力

//场景 多重验证
//验证某个面试人员是否符合要求。约定如下：
//1，年龄age必须大于等于20
//2，工作经验workExperience必须大于等于三年
//3, 职业job是前端开发FE

//不使用策略模式

class People {
    constructor(age,workExperience,job){
        this.age = age;
        this.workExperience = workExperience;
        this.job = job
    }
}

class CheckHandler {
    age = 20;
    workExperience = 3;
    job = 'FE';

    check(people){
        if(people.age < this.age){
            return false
        }
        if(people.workExperience < this.workExperience){
            return false
        }
        if(people.job !== this.job){
            return false
        }
        return true
    }
}

const checkPeople = new CheckHandler() 

const people1 = new People(20,2,'FE')
const people2 = new People(20,3,'FE')

//const isPermits = checkPeople.check(people1)
//const isPermits = checkPeople.check(people2)
//console.log('isPermits =>',isPermits)

//缺点 
//1，check函数会爆炸。包含太多if else
//2，策略无法灵活组合与复用。
//3，违反开放封闭原则。扩展无法开放因为修改会深入到check函数。（对扩展是开放的,而对修改是封闭的）


// 使用策略模式
class Strategy extends People{ //策略类
     
    checkAge(age,errMsg = '年龄不匹配'){
        if(age < this.age){
            console.log(errMsg);
            return false
        }
        return true
    }

    checkWorkExperience(workExperience,errMsg = '工作年限不匹配'){
        if(workExperience < this.workExperience){
            console.log(errMsg);
            return false
        }
        return true
    }

    checkJob(job,errMsg = '工种不匹配'){
        if(job !== this.job){
            console.log(errMsg);
            return false
        }
        return true
    }
}

//环境类
class Validator {
    cache = [];
    strategy = new Strategy(20,3,'FE');

    add(checkFunc,value,errMsg){ //添加验证方法（验证方法用函数包装起来方便check一次验证）， 放在缓存中。
        this.cache.push(_=>{
            return this.strategy[checkFunc](value,errMsg)
        })
    }

    check(){
        for(let i = 0; i < this.cache.length; i++){
            const isPermits = this.cache[i]();
            if(!isPermits){
                return false
            }
        }
        // this.cache.forEach(func => {
        //     const isPermits = func();
        //     if(!isPermits){
        //         return false
        //     }
        // })
        return true
    }
}

const validator = new Validator()

const people3 = new People(20,3,'FE')
const people4 = new People(2,3,'FE')
const people5 = new People(20,1,'FE')
const people6 = new People(20,3,'awFE')

validator.add('checkAge',people3.age)
//validator.add('checkWorkExperience',people5.workExperience)
validator.add('checkJob',people6.job)

console.log(validator.check())


//优点
//1，策略方法相互独立且可复用且可随意组合
//2，避免多重ifelse嵌套语句
//3，符合开发封闭原则
