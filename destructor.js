const {x,y,z} ={x:1, y1:2, z:3};
console.log(y); // reference error: you have to declare same name
const {x1, y1, z1} = {x1:8, y1:10, z1:12};
console.log(y1);
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price}=product;
console.log(price);
const [first,,third]=[4,5,6];
console.log(first);
console.log(third);
console.log(Math.max([4,5,6])); // reference error 
const array=[4,5,6];
console.log(Math.max(...array)); 
function min(nums) { return Math.min(...nums) }
console.log(min( [11,5,6,8 ]));