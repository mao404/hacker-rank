function gradingStudents(grades: number[]): number[] {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      continue;
    }
    let nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;

    if (nextMultipleOfFive - grades[i] < 3) {
      grades[i] = nextMultipleOfFive;
    }
  }

  return grades;
}
