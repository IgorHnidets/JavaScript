function foreach(fwef,wegweg){

}
const array = [12,425,6,745,3463,436];
foreach(array,function (i,ind) {
    console.log(i + '-' + ind);
})
foreach(array,function (i,ind) {
    console.log(i + 'wfwegr' + ind);
})
array.forEach()


function testArg(a,b){
    console.log(a);
    console.log(b);
    console.log(arguments);
}
testArg(10,20,20)



// function f(callbavk) {
//     console.log('some text',callbavk);
//     callbavk();
// }
// f(function (){
//     console.log('callbavk')
// });
//
// const test = function (){
//     console.log('test')
// }
// console.log(test());
//
// f(test());

// function caclulate(a, b , callback){
//     const res = a * b + 2;
//     callback(res);
// }
// const display = function (res){
//     console.log(res)
// }
// caclulate(10,20,display());

// const array = [1,2,3,4,5,6,7,8,9,14,18,26];
// // let str = array.(function (item){
// // });
// let number =array.reduce(function (accum,current){
//     console.log('accum ' + accum);
//     console.log('cur ' + current);
//     return accum+ current;
// } , 0)
// console.log(number)


// array.forEach(function (value,index,array){
//     console.log('index',index);
//     console.log(value);
// })

// let str = array.filter(function (item){
//     return item % 2 === 0;
// });

// let str = array.(function (item){
// });

// console.log(str)

// let str = array.every(function (ite){
//     return ite % 2 === 0;
// })
//
// const string = ['test1','test2','test3']
//
// let str = array.map(function (item){
//     return item *3
// });
//
// let numb = str.map(function (item){
//     return item.toUpperCase()
// })
// console.log(str)

// let num = array.filter(function (item){
//     if (item % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// })
// console.log(num)
// console.log(array.sort());
// const compar = function (prev,next){
//     console.log('prev ' + prev);
//     console.log('next ' +next);
//     return prev - next;
// }
// array.sort(compar);

// console.log(array.reverse());
// var num = array.concat([10,151,83,35]);
// console.log(num);
// console.log(array.indexOf(18))

// const user = {
//     firstname:'test',
//     lastname : 'test',
//     age:20,
//     justkey : 1
// }
// console.log(user);
// let str = Object.keys(user)
// console.log(str);
//
// let users = Object.values(user);
// console.log(users);
