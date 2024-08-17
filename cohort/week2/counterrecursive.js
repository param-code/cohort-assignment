let i = 0;
function counter(){
    process.stdout.write(`\r${i++}`);
    setTimeout(counter,1000);
}
counter();