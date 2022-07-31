//1
// var a = 0;
// var n = Number(prompt("Введіть число"));
// var sum = 0;
//
// while(a <= n){
//     sum+=a;
//     a++;
// }
// alert(sum);

//2
// var a = Number(prompt('Please enter a number'));
//
// if (a>0){
//     prompt('This number is more 0');
// } else if (a<0){
//     prompt('This number is less 0');
// } else {
//     prompt('This number 0');
// }


//3
// do {
//     var n = Number(prompt('8 * 9 = ?'));
// }while (n != 72){
//     alert('Welcome')
// }


//4
// let  name = prompt('Please set a password');
//
// if (name === 'admin') {
//     alert("welcome admin");
// } else if (name === 'pass123') {
//     alert("welcome");
// } else {
//     alert('I dont know you');
// }

//5

var n = 10;

function fib(n) {
    var a = 1,
        b = 1
    result = a + ' ' + b + ' ';
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
        result += c + ' ';
    }
    return result;
}

console.log( fib( n ) );
