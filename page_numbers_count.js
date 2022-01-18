/*

This question is from me!

You have a book and you are reading it daily. 
You are reading 10 pages a day.
After 80 days later, You have read 800 pages.

Page number are starting with 1 and continue as ususal 1,2,3,4...

After 80 days and you are at page 800, calculate how many digits printed so far to the pages.

ie. if you had read 10 pages numbers were 1,2,3,4,5,6,7,8,9,10
result would be 1 digits x 9 + 2 digits = 11 digits used in total

1-9 counts 1 digit per page
10-99 counts 2 digits per page
100-999 counts 3 digits per page
1000-9999 counts 4 digitrs per page
9999+ ignored

*/

function printedDigits(pageNumber) {
  //here is a quick math formula for 4 digits 4n-1107, 3n-108 for three digits, 2n-9 for two digits

  if (pageNumber > 999) { return 4 * pageNumber - 1107; }
  else {
    return pageNumber > 99 ? 3 * pageNumber - 108 : 2 * pageNumber - 9;
  }
}

let a = printedDigits(25);
console.log(a)