const arr = [1,34,324,2,1];
let biggest = arr[0];
for(let i = 1;i < arr.length;i++){
    if(arr[i] > biggest)biggest = arr[i];
}
console.log(biggest);