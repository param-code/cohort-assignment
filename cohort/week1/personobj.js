// const personArray = ["Raj","Harkirat","Neha"];
// const genderArray = ["Male","Male","Female"];
// const person = {
//     firstName : "Harkirat",
//     gender: "Male"
// }
const arr = [
    {firstName:"Harkirat",
    gender:"Male"},
    {
        firstName: "Raj",
        gender: "Male"
    },
    {
        firstName: "Neha",
        gender: "Female"
    }
]
for(let i = 0;i < arr.length;i++){
    if(arr[i]["gender"] == "Male")console.log(arr[i]["firstName"]);
}
