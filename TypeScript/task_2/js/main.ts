interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// employeeがDirectorのインスタンスであるかどうかをチェックする関数
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  // employeeオブジェクトがDirectorのインスタンスであるかどうかチェック
  return employee instanceof Director;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if(isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));
