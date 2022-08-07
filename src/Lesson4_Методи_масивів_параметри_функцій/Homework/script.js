//1
// const array = [1,-2,30,14,45,-6,27,8, 0 ,39,-12];
// function compare1 (a,b){
//     if (a>b) return 1;
//     if (a<b) return -1;
// }
// array.sort(compare1);
// console.log(array)
// function compare2 (a,b){
//     if (a>b) return -1;
//     if (a<b) return 1;
// }
// array.sort(compare2);
// console.log(array)

//2

// let positiveArray = array.filter(function (number){
//     return number>=0;
// })
// let negativeArray = array.filter(function (number){
//     return number<0;
// })
// console.log(positiveArray);
// console.log(negativeArray);

//3

let arrayStudent = [
    { age: 19 , groupName: 'BD_35' },
    { age: 20 , groupName: 'BD_31' },
    { age: 15 , groupName: 'BD_33' },
    { age: 20 , groupName: 'BD_35' },
    { age: 18 , groupName: 'BD_33' },
    { age: 20 , groupName: 'BD_31' },
    { age: 17 , groupName: 'BD_35' },
    { age: 16 , groupName: 'BD_35' },
    { age: 20 , groupName: 'BD_31' },
    { age: 19 , groupName: 'BD_33' }
];

// let groupArray = arrayStudent.map(function (namegroup){
//     return `${namegroup.groupName}`
// });
// console.log(groupArray)

// const amount = arrayStudent.reduce(function (amount,param){
//     return amount + param.age
// }, 0)
// console.log(amount)

let adults = arrayStudent.filter(function (param){
    if (this.isRun){
        return false;
    }
    if (param["age"] < 18){
        this.isRun = true;
            return console.log('У групі є неповнолітні ' );
        }
});

