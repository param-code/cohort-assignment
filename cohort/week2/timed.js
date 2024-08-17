console.log("Hii");
setTimeout(function () {
    console.log("Hello");
    setTimeout(function() {
        console.log("World");
        setTimeout(()=>{
            console.log("EveryOne");
        },5000);
     },5000);
},5000)
console.log("Bye");