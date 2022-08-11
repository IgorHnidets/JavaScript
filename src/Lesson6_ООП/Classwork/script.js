// function Machine() {
//     let enabled = true;
//     this.enabled = function () {
//         console.log('FROM MACHINE');
//         enabled = true
//     }
//     this.disabled = function () {
//         enabled = false;
//     }
//     this.isEnabled = function () {
//         return enabled;
//     }
// }
//
// function CoffeMachine(power) {
//     Machine.call(this)
//
//     const WATER_HEAD_CAPACITY = 100;
//     const MAX_WaterAm = 100;
//
//     this.waterAmount = 13;
//     const self = this;
//
//     function getboiltime() {
//         let time = self.waterAmount * WATER_HEAD_CAPACITY / 100;
//         console.log('Time - ', time);
//         return time;
//     }
//
//     function onREADY() {
//         console.log('Coffee is ready');
//     }
//     this.enabled = function () {
//         console.log('FROM Coffee MACHINE');
//
//     }
//
//     this.run = function () {
//         setTimeout(onREADY, getboiltime())
//     }
//     self.setwaterAmount = function (amount) {
//         if (amount<0) throw new Error('Cant be less 0');
//         if (amount>MAX_WaterAm) throw new Error('Cant be more ' + MAX_WaterAm);
//         else self.waterAmount = amount;
//     }
// }
//
// function USER(name) {
//     this.name = name;
// }
// const User = new USER('Igor');
// USER.prototype.sayHALLO = function () {
//     console.log('Hello ' + this.name);
// }
// console.log(User.sayHALLO())
//
//
// function develop(profes) {
//     this.profes = profes;
// }
// develop.prototype.devel = function () {
//     console.log('Developer do ' + this.profes);
// }
//
// develop.prototype = Object.create(USER.prototype);
// develop.prototype.constructor = USER;
// const Develop = new develop('Java')
// console.log(Develop)



// console.log(User.sayHALLO())
// const machine = new CoffeMachine(500);
// machine.setwaterAmount(70)
// // machine.enabled()
// // machine.run()
//
// const obj = {
//     name:'VAaska'
// }
// const user = {
//     surname:'Himka'
// }
// const developer = {
//     profession:'developer'
// }
// user.__proto__ = obj;
// developer.__proto__ = user;
// console.log(developer.name);

