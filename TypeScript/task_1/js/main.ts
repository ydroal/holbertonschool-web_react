export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

export interface StudentConstructor {
  // コンストラクタのシグネチャ
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  // メソッドのシグネチャ
  displayName(): string;
  workOnHomework(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// const student1 = new StudentClass('yoko', 'ONO');
// console.log(student1.workOnHomework());
// console.log(student1.displayName());


