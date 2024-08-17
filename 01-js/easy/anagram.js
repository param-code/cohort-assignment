/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAlpha(string){
    let z = 0;
    [...string].forEach(c=>{
        if(c >= 'a' && c <= 'z')z++;
        else return false;
    })
    return true;
}
function isAnagram(str1, str2) {
    if(str1.length !== str2.length)return false;
    str1 = str1.replaceAll(/\s/g,'').toLowerCase().split('').sort().join('');
    str2 = str2.replaceAll(/\s/g,'').toLowerCase().split('').sort().join('');
    return str1 === str2;
}

module.exports = isAnagram;
