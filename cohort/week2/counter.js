function counter(){
    let i = 0;
    setInterval(()=>{
        process.stdout.write(`\r${i++}`);
    },1000);
}
counter();