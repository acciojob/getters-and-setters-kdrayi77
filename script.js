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
