
class Person {
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	get nameofp()
	{
		return this.name;
	}
  set ageof(age)
  {
     this.age=age;
  }
}

class Student extends Person {
	study()
	{
		console.log( this.name+" is studying");
	}
}

class Teacher extends Person {
	teach()
	{
		console.log (this.name+" is teaching");
	}
}
 
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
 
