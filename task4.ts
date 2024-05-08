// Define a class for Student
class Student {
    id: number;
    name: string;
    fee: number;
    class: string;
    dues: number;
    contactNumber: string;
    email: string;
    address: string;
    attendance: Record<string, boolean>; // Key: Date, Value: Present/Absent
    examinationResults: Record<string, number>; // Key: Exam Name, Value: Marks
    parentInfo: {
        name: string;
        contactNumber: string;
        email: string;
        relationshipStatus: string;
    };
    extraCurricularActivities: string[];
    libraryBooks: string[];
    feesPaymentHistory: { date: Date; amount: number }[];
    hostelInfo?: {
        roomNumber: string;
        fees: number;
        wardenContact: string;
    };

    constructor(id: number, name: string, fee: number, studentClass: string, dues: number, 
                contactNumber: string, email: string, address: string) {
        this.id = id;
        this.name = name;
        this.fee = fee;
        this.class = studentClass;
        this.dues = dues;
        this.contactNumber = contactNumber;
        this.email = email;
        this.address = address;
        this.attendance = {};
        this.examinationResults = {};
        this.parentInfo = {
            name: "",
            contactNumber: "",
            email: "",
            relationshipStatus: ""
        };
        this.extraCurricularActivities = [];
        this.libraryBooks = [];
        this.feesPaymentHistory = [];
    }

    // Method to mark attendance
    markAttendance(date: string, present: boolean) {
        this.attendance[date] = present;
    }

    // Method to add examination results
    addExamResult(examName: string, marks: number) {
        this.examinationResults[examName] = marks;
    }

    // Method to add extra-curricular activity
    addExtraCurricularActivity(activity: string) {
        this.extraCurricularActivities.push(activity);
    }

    // Method to issue a library book
    issueLibraryBook(bookName: string) {
        this.libraryBooks.push(bookName);
    }

    // Method to return a library book
    returnLibraryBook(bookName: string) {
        const index = this.libraryBooks.indexOf(bookName);
        if (index !== -1) {
            this.libraryBooks.splice(index, 1);
        }
    }

    // Method to record fee payment
    recordFeePayment(date: Date, amount: number) {
        this.feesPaymentHistory.push({ date, amount });
        this.dues -= amount;
    }

    // Method to set hostel information
    setHostelInfo(roomNumber: string, fees: number, wardenContact: string) {
        this.hostelInfo = {
            roomNumber,
            fees,
            wardenContact
        };
    }
}

// Example usage
const student1 = new Student(1, "John Doe", 1000, "Class 10", 200, 
                            "1234567890", "john.doe@example.com", "123 Main Street");

// Marking attendance
student1.markAttendance("2024-05-04", true);

// Adding examination results
student1.addExamResult("Maths Midterm", 85);

// Adding extra-curricular activity
student1.addExtraCurricularActivity("Football");

// Issuing a library book
student1.issueLibraryBook("Introduction to TypeScript");

// Returning a library book
student1.returnLibraryBook("Introduction to TypeScript");

// Recording fee payment
student1.recordFeePayment(new Date(), 500);

// Setting hostel information
student1.setHostelInfo("A101", 2000, "9876543210");

console.log(student1);
