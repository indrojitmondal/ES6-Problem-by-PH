//1) Write an arrow function that will take 3 parameters, will multiply the parameters and 
//  will return the result. 

const multiplication = (a,b,c) => a*b*c;
console.log(multiplication(2,3,4));

// 2) write the following sentences in three lines and print  
// the result I am a web developer. I love to code. I love to eat biryani.

const p =`
   I am a web developer.
   I love to code.
   I love to eat biryani.
`
console.log(p);

// 3) Write an arrow function that will take 2 parameters. One parameter will come 
// from you and the other parameter will be a default parameter.
// Add these two parameter and return the result

const add = (a,b=100) => a+b;
console.log(add(5,));