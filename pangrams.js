/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. 
Ignore case. Return either pangram or not pangram as appropriate.

*/

let s1 = "Tthe quick brown fox jumps over the lazy dog";
//let s2 = "We promptly judged antique ivory buckles for the next prize";

s1 = s1.replace(/ /g, "");
let result = Array.from(new Set(s1.toLowerCase())).join("");
 
if (result.length == 26) return "pangram";
else return "not pangram";
