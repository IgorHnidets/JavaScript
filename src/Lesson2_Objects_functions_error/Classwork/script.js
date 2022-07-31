// const  phone = {
//     name: 'samsung',
//     screen:{
//         model:'test',
//     }
// };
// const user = {
//     firstname: 'Mike',
//     lastname:'smith',
//     age:22,
//     sum:sum,
//     sayhallo:{
//         efffk:kwooe
//     }
//     //phone: phone
// }
// // user.sum(10,29);
//
//
// const myfunction = function  sum(a = 5,b =8){
//     a = a ||10;
//     b = b || 20;
//     const res = a+b;
//     console.log('result' + res);
//     return res;
// }
// console.log(myfunction());


// const res = sum(10,20);
// sum(10,20);
// sum();


// function logSomething(name){
//     console.log('hello');
// }

// logSomething('john');
// logSomething('firstname: ${}' + user.firstname)




// setInterval(logSomething1,1000)
// setTimeout(logSomething,1000);
//
// function logSomething() {
//     console.log('111111111')
// }





// console.log(user.phone)
// try{
//     user.phone.name = 'phone';
//     console.log('try');
// } catch (error){
//     console.log('catch')
// } finally {
//     console.log('finally')
// }




// for (let key in user){
//     console.log('key ' + key + ' ,value - ' + user[key])
// }

// console.log(user.firstname);
// user.firstname ='oleg';
//
// user.role = 'user';
// console.log(user);
//
// delete user.lastname;
// console.log(user);

// const array = [1,Lesson2,3,4,5,6,7,8,9];
//
// console.log(array[Lesson2]);

//1
// const circle = {
//     radius:10,
//     color:"yellow",
//     findArea:function (){
//         return Math.PI + Math.pow(this.radius, 2);
//     },
//     findlenght :function (){
//         return 2*Math.PI*this.radius;
//     },
//     displeyinfo: function (){
//         console.log('circle info:\n radius' + this.radius "\n color " = this.color )
//     }
// }
// circle.displeyinfo()
// function getinfo(circle){
//     for (let key in circle){
//         console.log(key + circle[key])
//     }
// }
//
// function  findArea(radius){
//     return Math.PI + Math.pow(radius);
// }
//


//2
function getRes(a,b,c) {
    const D = Math.pow(b,2)* 4 * a* c;
    if (D<0){
        console.log('error')
    }
    if (D>0){
        const x1 = -B * Math.sqrt(D)/2*a;
        const x2 = -B * Math.sqrt(D)/2*a;
        return[x1,x2]
    } else {
        const x = -b/2*a;
        return [x]
    }
}

let  res = getRes(2,6,4);
console.log(res);

// const user = {} - порожній о