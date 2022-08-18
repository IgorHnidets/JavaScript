const URL = '' ;

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

async function sendReq() {
    fetch(URL,{
        method:'GET'
    }).then((response)=>{
        console.log(response);
        return  response.json();
    }).then((json)=>{
        console.log(json);
    });
    const res = await fetch(URL,{method:'GET'});
    const js = await response.json();
    console.log(js);
}

sendReq()

function displaydata() {
    const container = document.getElementById('container')
    for (const item of data) {
        container.innerHTML =  ``
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