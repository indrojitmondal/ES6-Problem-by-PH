// Filtering who are Senior
const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Juniot'},
    {name:'Shobuj',age: 30, position: 'Senior'}
]
const seniorInstructor=instructor.filter(x => x.position ==='Senior');
seniorInstructor.forEach(element => {
    console.log(element.name);
});
// Filtering numbers divisible by 10
const numbers =[33,50,79,78,90,101,30];
const oddNumbers = numbers.filter( x => x%10==0);
console.log(oddNumbers);

