/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    for(let letter of str){
        let vowel = "aeiou";
        let s = letter.toLowerCase();
        for(let a of vowel){
            if(a === s)count++;
        }
    };
    return count;
}

module.exports = countVowels;