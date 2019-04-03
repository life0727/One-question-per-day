var arr1 = [1,2,3,4,5,6]
var arr2 = [1,2,3,7,8,9]

//求并集

var arr = new Set([...arr1,...arr2])

var result = Array.from(arr)

console.log(result) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//求交集

var arr = arr1.filter(item => new Set(arr2).has(item))

var result = [...new Set(arr)]

console.log(result) //[ 1, 2, 3 ]

//求差集

var arr = arr1.filter(item => !new Set(arr2).has(item))

var result = [...new Set(arr)]

console.log(result) //[ 4, 5, 6 ]