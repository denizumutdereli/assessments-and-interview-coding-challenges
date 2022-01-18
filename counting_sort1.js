/*
 sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. 
 Each time a value occurs in the original array, you increment the counter at that index. 
 At the end, run through your counting array, printing the value of each non-zero valued index that number of times.
const arr = [1,1,3,2,1]
result = [0,3,1,1]

array will be 100 slots.

some other poor describted question..
*/

const arr = [1,1,3,2,1]
let value;
    let freq;
    let freqArray = [];

for(let i = 0; i < 4;i++){
    freqArray.push(0);            
}

for(let i = 0; i < arr.length; i++){
    value = arr[i];
    freq = freqArray[value];
    
    freqArray[value] = freq+1;            
}
        
console.log(freqArray)
