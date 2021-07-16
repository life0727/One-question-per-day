const willHaveLucky = (type = '双') => {
    let construction;
    if(Array.isArray(type)){
        construction = type
    }else{
        if(type === '双'){
            construction = [{
                deep:33,
                size:6
            },{
                deep:16,
                size:1
            }]
        }else if(type === '透'){
            construction = [{
                deep:35,
                size:5
            },{
                deep:12,
                size:2
            }]
        }
    }

    let result = [];
    construction.forEach((item,index) => {
        const nums = [];
        for(let i = 0; i < item.size; i++ ){
            const num = Number.parseInt(Math.random() * item.deep) + 1
            if(nums.includes(num)){
                i--
            }else{
                nums.push(num)
            }
            
        }
        //console.log('nums',nums)
        index == construction.length - 1 ? result.push(...nums) : result.push(...nums,'＋')
    })
    return result
}
const res = willHaveLucky('透')
// const res = willHaveLucky([{
//     deep:33,
//     size:6
// },{
//     deep:16,
//     size:1
// }])
console.log('res',res)
