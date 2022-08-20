const URL = 'https://jsonplaceholder.typicode.com/posts' ;

    // function sendReq() {
    //     fetch(URL,{
    //         method:'GET'
    //     }).then((response)=>{
    //         console.log(response);
    //         return  response.json();
    //     }).then((json)=>{
    //         console.log(json);
    //     });
    // }
    // sendReq();

async function sendReq() {
    const responce = await fetch(URL,
        {method:'GET'
    });
    const json = await responce.json();
    console.log(json);
    displaydata(json)
}


function displaydata(data) {
    let container = document.getElementById('container')
    for (const item of data) {
        container.innerHTML +=  `
        <div class="c_item">
        <p>${item.id}</p>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
</div> `
    }
}




// console.log('prequest');
//
// setTimeout(()=>{
//     console.log('prepar data');
//     const serverD = {
//         serber:'localhost',
//         status:100,
//         userId:1,
//     }
//     setTimeout(()=>{
//         serverD.modifaid = true;
//         console.log('datareceived',serverD);
//     },2000)
// },2000)


// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('prepar data');
//
//         const serverD = {
//             serber:'localhost',
//             status:100,
//             userId:1,
//         }
//         resolve(serverD);
//     },2000)
//
// })
//
// function sleep(time) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('ok');
//         },time)
//     })
// }
//
// function sleep(time1) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('ok');
//         },time1)
//     })
// }
//
// async function getdate() {
// // return 'data'
//  await sleep(2000).then((data)=>{
//     console.log(data);
// }).catch()
// }
//
// getdate()


// p.then((serverD)=>{
//     console.log('than',serverD);
//
//     const p = new Promise((resolve, reject)=>{
// })

// function start(calback){
//     setTimeout(()=>{
//         console.log('start');
//         calback()
//     },100)
// }
//
// function finish(){
//     console.log('finish');
// }
//
// start()
// finish()