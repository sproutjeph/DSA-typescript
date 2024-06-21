class Student {
  firstName: string;
  lastName: string;
  age: number | undefined;
  constructor(firstName: string, lastName: string, age?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // instance methods
  getFullName() {
    return `Full name is ${this.firstName}  ${this.lastName}`;
  }

  updateAge(age: number) {
    this.age = age;
  }

  // class methods
  static enrollStudents() {
    return "Enrolling Students";
  }
}

let firstStudent = new Student("Mbah", "Jephthah");
firstStudent.updateAge(20);

console.log(firstStudent);

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static distance(a: { x: number }, b: { y: number }) {
    const dx = a.x - b.y;
    const dy = b.y - a.x;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
