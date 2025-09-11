
// Base class: Person
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Getter for age
  get age(): number {
    return this._age;
  }

  // Setter for age
  set age(age: number) {
    this._age = age;
  }
}

// Subclass: Student
class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;
console.log(person.age);   // Output: 30

const student = new Student("Alice", 22);
student.study();           // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach();           // Output: Bob is teaching

 
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
 
