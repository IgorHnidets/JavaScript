//HOMEWORK
// function Robot() {
//     this.work = function () {
//         console.log('Я Robot – я просто працюю');
//     }
// }
//
// function CoffeeRobot() {
//     Robot.call(this)
//     this.work = function () {
//         console.log('Я CoffeRobot – я варю каву');
//     }
// }
//
// function RobotDancer() {
//     Robot.call(this)
//     this.work = function () {
//         console.log('Я RobotDancer – я просто танцюю');
//     }
// }
//
// function RobotCoocker() {
//     Robot.call(this)
//     this.work = function () {
//         console.log('Я RobotCoocker – я просто готую');
//     }
// }
// const array = [new Robot(),new CoffeeRobot,new RobotCoocker(),new RobotDancer()]
// array.forEach((robot) => {
//     robot.work()
// })


// function Robot() {}
// Robot.prototype.work = function () {
//     console.log('Я Robot – я просто працюю');
// }
//
// function CoffeRobot() {}
// CoffeRobot.prototype.work = function () {
//     console.log('Я CoffeRobot – я варю каву');
// }
//
// function RobotDancer() {}
// RobotDancer.prototype.work = function RobotDancer() {
//         console.log('Я RobotDancer – я просто танцюю');
// }
//
// function RobotCoocker() {}
// RobotCoocker.prototype.work = function RobotCoocker() {
//     console.log('Я RobotCoocker – я просто готую');
// }
//
//
// const array = [new Robot(),new CoffeRobot(),new RobotDancer(),new RobotCoocker()]
// array.forEach((robot) => {
//     robot.work()
// })

class Robot{
    work(){
        console.log('Я Robot – я просто працюю')
    }
}
class CoffeRobot extends Robot{
    work() {
        console.log('Я CoffeRobot – я варю каву ')
    }
}
class RobotDancer extends Robot{
    work() {
        console.log('Я RobotDancer – я просто танцюю ')
    }
}
class RobotCoocker extends Robot{
    work() {
        console.log('Я RobotCoocker – я просто готую ')
    }
}
const array = [new Robot(),new CoffeRobot(),new RobotDancer(),new RobotCoocker()];
array.forEach((robot) => {
    robot.work()
})

