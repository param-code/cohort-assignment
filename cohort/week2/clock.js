function counter(){
    let time = new Date().toLocaleTimeString();
    let sec = parseInt(time[5] + time[6]);
    setInterval(()=>{
        process.stdout.write(`\r${time.slice(0,5)}${sec++}${time.slice(7)}`);
    },1000);
}
counter();