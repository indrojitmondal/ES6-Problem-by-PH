class Person{
    constructor(name, age){
        this.name =name;
        this.age =age;
    }
    eat(){
        console.log(`${this.name} can eat`);
    }
}
const kodomAlai = new Person('Kodom Ali', 30);
kodomAlai.eat();

class Coder extends Person {

    constructor(name, age, profession){
        super(name, age);
        this.profession =profession;
    }
    code(){
        console.log(`${this.name}'s profession is ${this.profession}`);
    }

}
const person2= new Coder('Shefat',26, 'Software Engineer'); 
person2.eat();
person2.code();