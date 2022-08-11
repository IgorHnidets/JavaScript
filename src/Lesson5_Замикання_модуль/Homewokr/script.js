
// function makeBuffer(){
//     var text = '';
//     return function (value){
//         if (arguments.length === 0){
//             return text;
//         }
//         text +=value;
//     }
// }
// var buffer = makeBuffer();
// buffer('Javascript ');
// buffer('need ');
// buffer('learn');
// console.log(buffer());
//
// var buffer2 = makeBuffer();
// buffer2(0);
// buffer2(1);
// buffer2(0);
// console.log(buffer2())

function makeBuffer2(){
    var text = '';
    var buffer = function (value){
        if (arguments.length === 0){
            return text ;
        }
        text +=value;
    }
    buffer.clear = function (){
        return text = '';
    }
    return buffer;
}

var buffer3 = makeBuffer2();
buffer3("Тест ");
buffer3("тебе не з'їсть");
console.log(buffer3());
buffer3.clear();
console.log(buffer3());

