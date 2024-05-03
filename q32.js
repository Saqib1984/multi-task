// Student class
class Student {
    name;
    studentID;
    coursesEnrolled;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.coursesEnrolled = [];
        this.balance = 0;
    }
    enrollCourse(course) {
        this.coursesEnrolled.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: ${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of ${amount} received from ${this.name}.`);
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Courses Enrolled: ${this.coursesEnrolled.join(', ')}`);
        console.log(`Balance: ${this.balance}`);
    }
    generateStudentID() {
        // Generate a 5-digit unique student ID
        // You can implement your own logic here
        return Math.random().toString(36).substr(2, 5).toUpperCase();
    }
}
// StudentManager class
class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        return newStudent;
    }
}
// Main program
function main() {
    const studentManager = new StudentManager();
    // Example usage
    const student1 = studentManager.addStudent("John Doe");
    student1.enrollCourse("Mathematics");
    student1.enrollCourse("Physics");
    student1.viewBalance();
    student1.payTuition(1000);
    student1.showStatus();
}
// Execute the main program
main();
export {};
