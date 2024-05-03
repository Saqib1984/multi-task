// Student class
class Student {
    name: string;
    studentID: string;
    coursesEnrolled: string[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.coursesEnrolled = [];
        this.balance = 0;
    }

    enrollCourse(course: string) {
        this.coursesEnrolled.push(course);
    }

    viewBalance() {
        console.log(`Balance for ${this.name}: ${this.balance}`);
    }

    payTuition(amount: number) {
        this.balance -= amount;
        console.log(`Payment of ${amount} received from ${this.name}.`);
    }

    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Courses Enrolled: ${this.coursesEnrolled.join(', ')}`);
        console.log(`Balance: ${this.balance}`);
    }

    private generateStudentID(): string {
        // Generate a 5-digit unique student ID
        // You can implement your own logic here
        return Math.random().toString(36).substr(2, 5).toUpperCase();
    }
}

// StudentManager class
class StudentManager {
    students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(name: string) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        return newStudent;
    }

    // Implement other methods for managing students
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
