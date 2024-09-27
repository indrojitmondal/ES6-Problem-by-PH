const people = [{name: 'Meena',age: 20},{name: 'Rina',age: 15},{name: 'Suchitra',age: 22}];
console.log(people.reduce( (p,c) => p + c.age,0) );