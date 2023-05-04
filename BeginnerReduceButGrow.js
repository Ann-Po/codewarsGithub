// Given a non-empty array of integers, return the result of multiplying the values together in order. 
// Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow1 = (x) => x.reduce((acc, el, i, arr) => acc * el)

console.log(grow1([1, 2, 3, 10])); 



function grow(x){
    let result = 1;
     for (let i = 0; i < x.length; i++) {
       result = result * x[i];
     }
     return result;
   }

console.log(grow([1, 2, 3])); 

