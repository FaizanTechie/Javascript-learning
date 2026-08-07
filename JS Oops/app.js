// Factory Functions
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
  };
  return person;
}

let p1 = personMaker("Faizan", 20);
let p2 = personMaker("Alia", 21);
console.log(p1, p2);

// Class with constructor

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

let p1 = new Person("Alice", 19);

// Inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi i am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let s1 = new Student("Faizan", 20, 95);
let t1 = new Teacher("Mohsin", 40, "Oops");
