function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}
async function counter(){
    for(let i = 0;i < Infinity;i++){
        process.stdout.write(`\r${i}`);
        await sleep(1000);
    }
}
counter();