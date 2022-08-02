// let arr = [1,2,3,5];
// arr.splice(0,3,);
// arr.splice(-,0,'test1','test2');
// console.log(arr)
// let ty = arr.slice(0,2);
// console.log(ty);
// console.log(arr);



// const object ={
//     username : 'test1'
// }
// const array =['11','22',22,'Test',undefined,object];
// delete  array[2];
// array.splice(1,3);
// console.log(array);

// const s = 'lviv;kyiv;lutsk';
// console.log(s);
// let sr = s.split(';',);
// console.log(sr);
// sr[1] = 'Dobrotvir';
// let s1 = sr.join(', ')
// console.log(s1);



// console.log(array[array.length-1]);

// // console.log(array);
// array[11] = 100500;
// object.email = 'igora669@gmail.com'
// let pop = array.pop();
// // console.log(array,pop);
// array.push('13124142');
// // console.log(array);
// array.shift();
// array.unshift('hi','Igor');
// console.log(array)
// console.log(array.length);
// const empty = []
// console.log(empty.length)

// if (!empty.length ===0 ){
//     console.log('array ampty')
// }
// for (const key of array){
//     console.log(key)
// }


//code time
function arrayTask() {
    let size = prompt('Please enter your number');
    const array = [];

    for (let i = 0; i < size; i++){
        const item = prompt('enter item');
        array.unshift(item);
    }
    console.log(' full array ' + array);

    let s = array.join('; ');
    console.log(s);

    const newarray = [];
    for (let i = 0; i < array.length; i++){
        newarray[i] = array[i]*2;
    }
    console.log(newarray);
    // newarray.splice(4,0,'test1','test2');
    newarray.splice(0,3,);
    newarray.splice(-2,0,'test1','test2');
    console.log(newarray);
}
arrayTask();




