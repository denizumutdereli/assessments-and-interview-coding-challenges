/*
Javascript challenge

There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

s = ['aba', 'bbb', 'aba', 'baa, cbb];
q = ['aba', 'baa', 'cbb']

aba = 2 times,
baa = 0,
cbb = 1
result = [2,0,1]
*/

function matchingStrings(strings, queries) {
  let temp = [];

  queries.map((x) => temp.push([...strings].filter((n) => n == x).length));

  return temp;
}
