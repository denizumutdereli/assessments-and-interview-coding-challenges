/*
Lonely Integer

Given an array of integers, where all elements but one occur twice, find the unique element.

a = [1,1,4,3,2,3,4]

The unique element is 2

Question looks simple but there are too many tricks. Same digits, count 4/5/6 etc. Dont forget %2 == 0 
*/

function lonelyinteger(a) {
    
    let temp = []
    a.map( (x) =>  ( [...a].filter( (w)=> w==x ).length %2 == 0 ? x : temp.push(x)   ) )
    
    return temp
}