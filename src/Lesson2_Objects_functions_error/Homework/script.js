//1
// const user = {
//     name:'ПИЛИП',
//     surname:'ШЕВЧЕНКО'
// }
// user.name = 'СЕРГІЙ';
// delete user.name;
// // console.log(user);
// for (let key in user){
//     console.log(key + ' value: ' + user[key])
// }

//2

// function sum(a,b,c,d,e){
//     const result = a+b+c+e+d;
//     console.log(`Salary sum : ${result}`);
//     return result;
// }
// const employeeSalaries = {
//     employee1:1000,
//     employee2:1100,
//     employee3:1300,
//     employee4:1000,
//     employee5:2000,
//     sum:sum
// }
// sum(employeeSalaries.employee1,employeeSalaries.employee2,employeeSalaries.employee3,employeeSalaries.employee4,employeeSalaries.employee5)

//3

const calc = {
    a:10,
    b:0,
    findsum:function(){
        return this.a+this.b;
    },
    findsubtract:function(){
        return this.a-this.b;
    },
    findmult:function(){
        return this.a*this.b;
    },
    finddiv:function(){
        if (this.b === 0){
            console.log('\nCant divide on 0 \n')
        } else {
            return this.a/this.b;
        }
    }
}
console.log(`Suma = ${calc.findsum()} \nSubtract = ${calc.findsubtract()} \nMultiple = ${calc.findmult()} \nDivide = ${calc.finddiv()}`)