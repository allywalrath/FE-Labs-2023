class Person {
constructor (newName, firstName, lastName, age, role) {
this.name = newName;
////////////////////////////////////////////////////////////////////////////////////////
// properties i added:
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
////////////////////////////////////////////////////////////////////////////////////////
}
introduce() {
return `My name is ${this.name} and I am ${this.age} years old.`;
}
}
class Teacher extends Person {
constructor (name, age, firstName, lastName, courseName) {
super(name, age, firstName, lastName); // courseName doesn't go here because it's from Teacher
this.courseName = courseName;
/* do i add properties here too? (if they only belong to the derived class, and you would also have to 
add them to the constructor, but not to super, that's only for ones that belong to the parent class)*/
}
introduceSelf() {
console.log(`My name is ${this.name}, and I will be teaching your ${this.courseName} class.`);
}
}
let teacher = new Teacher('Ms. Angle', 'Trigonometry');
console.log(teacher.introduce());
teacher.introduceSelf();


// Coding challenge:  
/* Modify this simple example to add additional properties to the Person class, 
and then use those properties within the Teacher class. */