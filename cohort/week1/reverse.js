const arr = [234,32,1,53,3];
for(let i = 0;i < arr.length/2;i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
for(let i = 0;i < arr.length;i++)console.log(arr[i]);