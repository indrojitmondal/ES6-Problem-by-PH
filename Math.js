console.log(Math.max([4,5,6])); // reference error 
const array=[4,5,6];
console.log(Math.max(...array)); 
function min(nums) { return Math.min(...nums) }
console.log(min( [11,5,6,8 ]));