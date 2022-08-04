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

// const user = {
//     1:{age: 19 , groupName: 'BD_35'},
//     2:{ age: 20 , groupName: 'BD_31' },
//     3:{ age: 18 , groupName: 'BD_33' },
//     4:{ age: 20 , groupName: 'BD_35' },
//     5:{ age: 18 , groupName: 'BD_33' },
//     6:{ age: 20 , groupName: 'BD_31' },
//     7:{ age: 18 , groupName: 'BD_35' },
//     8:{ age: 19 , groupName: 'BD_35' },
//     9:{ age: 20 , groupName: 'BD_31' },
//     10:{ age: 19 , groupName: 'BD_33' }
// }
//
// let arrayStudents = [user];

let arrayStudent = [
    { age: 19 , groupName: 'BD_35' },
    { age: 20 , groupName: 'BD_31' },
    { age: 18 , groupName: 'BD_33' },
    { age: 20 , groupName: 'BD_35' },
    { age: 18 , groupName: 'BD_33' },
    { age: 20 , groupName: 'BD_31' },
    { age: 18 , groupName: 'BD_35' },
    { age: 19 , groupName: 'BD_35' },
    { age: 20 , groupName: 'BD_31' },
    { age: 19 , groupName: 'BD_33' }
];

let groupArray = arrayStudent.filter(function (value, index, array){
    return value.groupName;
    // return console.log(`${namegroup.groupName}`)
});
console.log(groupArray)

// let agesum = arrayStudent.filter(function (parameter){
//     return console.log(parameter.age)
// });
