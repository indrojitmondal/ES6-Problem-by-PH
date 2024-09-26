const numbers=[1,2,3,4];

const squareSumAverage = (numbers) => (numbers.reduce((sum,num) => sum + num **2,0))/numbers.length;
console.log(squareSumAverage(numbers));