//code time


class ShoppingBucket{
    items = [];

    addItem(item){
        this.items.push(item);
    }

    getCount(){
        return this.items.length;
    }
    getsum(){
       const sum = this.items.reduce((acc,current) => acc+current.price, 0);
       return Math.floor(sum)
    }
    displayAll(){
        this.items.forEach((item) => console.log(item))
    }
}

function makeItem(){
    return{
        name: 'Tomato',
        price:100
    }
}

const bucket = new ShoppingBucket();

bucket.addItem(makeItem(100));
bucket.addItem(makeItem(100));
bucket.addItem(makeItem(100));
console.log(bucket.getCount());
console.log(bucket.getsum());
console.log(bucket.displayAll())


// class User {
//     constr(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const user = new User('Igor',20)
// console.log(user)



// import {User} from "./myModule.js";
//
// const user = new User('John');
// console.log(user)

// function makeCount(){
//     let count = 0;
//     return function (){
//         return ++count;
//     }
// }
// const counter = makeCount();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function User(name){
//     this.sayhello = function (){
//         console.log(name);
//     }
// }
// const user = new User('test');
// user.sayhello();
// console.log(user)

// function caculate(a,b){
//     function tosquare(num){
//         return  Math.pow(num,2)
//     }
//     const result = a + b + tosquare(5);
//     return result;
// }
//
// console.log(caculate(10, 20));

// var myvar = 'test';
// console.log(this.myvar)

// f()
// function  f(){
//     console.log('test')
// }


// {
//     ...window,
//     location,
//     myvar: 'test'
// }

// const func = function (name) {
//     console.log(this);
//     console.log(name)
// }
// const arrowfunc = (name,age) =>{
//     console.log(this);
//     return `${name} ${age}`
// }
// const object = {
//     name: 'adam',
//     sayHello:arrowfunc
// }
// object.sayHello('test',22)