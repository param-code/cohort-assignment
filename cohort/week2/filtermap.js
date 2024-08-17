const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.filter((element)=>!(element%2)));
arr.map((element,index,arr)=>arr[index] = 2*element);
console.log(arr);