interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Yoko',
  lastName: 'ONO',
  age: 20,
  location: 'Paris'
};

const student2: Student = {
  firstName: 'Issey',
  lastName: 'ONO',
  age: 20,
  location: 'Paris'
};

// const studentsList: Student[] = [student1, student2];
const studentsList: Array<Student> = [student1, student2];

function createTable() {
  const table = document.createElement('table');
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstName = row.insertCell();
    const location = row.insertCell();
    firstName.textContent = student.firstName;
    location.textContent = student.location;
  });
  document.body.appendChild(table);
}

createTable();