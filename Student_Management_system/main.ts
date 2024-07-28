import inquirer from 'inquirer';

class Student {
  private static idCounter = 10000;
  private id: string;
  private courses: string[] = [];
  private balance: number = 0;
  
  constructor(private firstName: string, private lastName: string) {
    this.id = this.generateStudentID();
  }

  private generateStudentID(): string {
    return (++Student.idCounter).toString();
  }

  public enroll(course: string): void {
    this.courses.push(course);
    this.balance += 600; // Assuming each course costs $600
  }

  public viewBalance(): number {
    return this.balance;
  }

  public payTuition(amount: number): void {
    this.balance -= amount;
    console.log(`Paid $${amount}. Remaining balance: $${this.balance}`);
  }

  public showStatus(): void {
    console.log(`\nName: ${this.firstName} ${this.lastName}`);
    console.log(`Student ID: ${this.id}`);
    console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
    console.log(`Balance: $${this.balance}\n`);
  }
}

const students: Student[] = [];

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: ['Add New Student', 'Enroll in Course', 'View Balance', 'Pay Tuition', 'Show Status', 'Exit']
    }
  ]);

  switch (action) {
    case 'Add New Student':
      await addNewStudent();
      break;
    case 'Enroll in Course':
      await enrollInCourse();
      break;
    case 'View Balance':
      await viewBalance();
      break;
    case 'Pay Tuition':
      await payTuition();
      break;
    case 'Show Status':
      await showStatus();
      break;
    case 'Exit':
      console.log('Exiting...');
      process.exit();
  }

  await mainMenu();
};

const addNewStudent = async () => {
  const { firstName, lastName } = await inquirer.prompt([
    { type: 'input', name: 'firstName', message: 'Enter first name:' },
    { type: 'input', name: 'lastName', message: 'Enter last name:' }
  ]);

  const student = new Student(firstName, lastName);
  students.push(student);
  console.log(`Student ${firstName} ${lastName} added with ID: ${student['id']}`);
};

const enrollInCourse = async () => {
  const student = await selectStudent();
  const { course } = await inquirer.prompt([
    { type: 'input', name: 'course', message: 'Enter course to enroll:' }
  ]);

  student.enroll(course);
  console.log(`Enrolled in course: ${course}`);
};

const viewBalance = async () => {
  const student = await selectStudent();
  console.log(`Current balance: $${student.viewBalance()}`);
};

const payTuition = async () => {
  const student = await selectStudent();
  const { amount } = await inquirer.prompt([
    { type: 'input', name: 'amount', message: 'Enter amount to pay:', validate: (input: string) => {
        const value = parseFloat(input);
        if (isNaN(value) || value <= 0) {
          return 'Please enter a valid amount.';
        }
        return true;
      }
    }
  ]);

  student.payTuition(parseFloat(amount));
};

const showStatus = async () => {
  const student = await selectStudent();
  student.showStatus();
};

const selectStudent = async (): Promise<Student> => {
  const { studentId } = await inquirer.prompt([
    { type: 'input', name: 'studentId', message: 'Enter student ID:' }
  ]);

  const student = students.find(s => s['id'] === studentId);
  if (!student) {
    console.log('Student not found.');
    return await selectStudent();
  }
  return student;
};

(async () => {
  console.log('Welcome to the Student Management System');
  await mainMenu();
})();
