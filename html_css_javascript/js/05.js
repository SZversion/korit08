/*
    javascript class
*/

class Student {
    name;
    age;

    constructor (name, age) {
        this.name = name;
        this.age = age
    }
}

const newStudent1 = new Student('name1', 33);
console.log(newStudent1);
console.log(newStudent1.name );