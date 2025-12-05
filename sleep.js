// async function sleep(millis) {
//     return new Promise ( (res, rej)=>{
//         return setTimeout(res, millis)
//     })
// }

async function sleep(millis) {
    return new Promise (res=> setTimeout(res, millis))
}
let t = Date.now()
sleep(100).then( ()=>{
    console.log(Date.now() - t);
})