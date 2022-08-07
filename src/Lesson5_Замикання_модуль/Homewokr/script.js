
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
    return  function (value){
        if (arguments.length === 0){
            return text ;
        } else if (value === 1){
            return text = '';
        }
        text +=value;
    }
}

var buffer3 = makeBuffer2();
buffer3("Тест ");
buffer3("тебе не з'їсть");
console.log(buffer3());
buffer3(1);
console.log(buffer3())
