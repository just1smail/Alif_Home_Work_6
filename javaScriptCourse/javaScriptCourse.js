class JavaScriptCourse {
  constructor() {
    this.students = [];
  }

  addStudent(name, grades) {
    this.students.push({ name, grades });
  }

  getAverageGrades() {
    return this.students.map((student) => ({
      name: student.name,
      average:
        student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length,
    }));
  }

  getStudentsAboveAverage(threshold) {
    return this.students.filter((student) => {
      const average =
        student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length;
      return average > threshold;
    });
  }

  allStudentsPassed(passingGrade) {
    return this.students.every((student) => {
      const average =
        student.grades.reduce((sum, grade) => sum, 0) / student.grades.length;
      return average >= passingGrade;
    });
  }
}

const jsCourse = new JavaScriptCourse();

// Добавляем студентов с их оценками
jsCourse.addStudent('Alice', [85, 90, 78]);
jsCourse.addStudent('Bob', [60, 75, 70]);
jsCourse.addStudent('Charlie', [95, 92, 88]);

// Получаем и выводим средние оценки всех студентов
console.log('Средние оценки студентов:', jsCourse.getAverageGrades());

// Получаем и выводим студентов с оценками выше 80
console.log('Студенты с оценками выше 80:', jsCourse.getStudentsAboveAverage(80));

// Проверяем, прошли ли все студенты курс с порогом 75
console.log('Все студенты прошли курс:', jsCourse.allStudentsPassed(75));

