import { students } from "../data/studentData.js";

//getEnrolledStudents — filter to only enrolled students
export function getEnrolledStudents() {
    return students.filter(student => student.isEnrolled === true)
}
// console.log(getEnrolledStudents())

//getPassingStudents — filter to only students with a grade of 60 or above
export function getPassingStudents() {
    return students.filter(student => student.grade >= 60)
}
// console.log(getPassingStudents())

//getAverageGrade — take an array of students and return the average grade rounded to 2 decimal places
export function getAverageGrade(students) {
    const total = students.reduce((sum, student) => sum + student.grade, 0)
    return (total / students.length).toFixed(2)
}
// console.log("Avg Grade: " + getAverageGrade(students))

// getLetterGrade — take a single student and return a new object with a letterGrade property added based on their grade score
export function getLetterGrade(student) {
    let letterGrade;
    if (student.grade > 90) {
        letterGrade = 'A';
    } else if (student.grade >= 80) {
        letterGrade = 'B';
    } else if (student.grade >= 70) {
        letterGrade = 'C';
    } else if (student.grade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return {
        id: student.id,
        name: student.name,
        grade: student.grade,
        letterGrade: letterGrade,
        subject: student.subject,
        isEnrolled: student.isEnrolled
    }
}
console.log(getLetterGrade(students[0]))

// getClassReport — get enrolled students, filter to passing, apply letter grades, and return the total enrolled count,
export function getClassReport() {
    const enrolled = getEnrolledStudents(students);
    const passingStudents = getPassingStudents(enrolled);
    const passWithLetters = passingStudents.map(student => getLetterGrade(student))
    const enrollCount = getEnrolledStudents(students).length

    // return `Here is your class report:\n  Enrolled Studnets: ${JSON.stringify(enrolled)}\n 
    // Passing Students: ${JSON.stringify(passingStudents)}\n
    // Passing Students with letter grades added: ${JSON.stringify(passWithLetters)}\n
    //  Enrollment Count: ${enrollCount}`
    return {
        enrolled: enrolled,
        enrollCount: enrollCount,
        passingStudents: passingStudents,
        passWithLetters: passWithLetters
    }

}
// console.log(getClassReport())

// Then write one orchestrator that composes the above functions:
//  passing count, average grade, and the list of passing students with their letter grades

export function orchestrator() {
    const passingAmount = getPassingStudents().length;
    const avgGrade = getAverageGrade(students);
    const passWithLetters = getPassingStudents().map(student => getLetterGrade(student))

    return {
        passingAmount: passingAmount,
        avgGrade: avgGrade,
        passWithLetters: passWithLetters
    }


}

