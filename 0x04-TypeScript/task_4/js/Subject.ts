namespace Subjects {
  export class Subject {
    protected teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
