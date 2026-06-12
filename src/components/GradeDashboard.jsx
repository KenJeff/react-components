import {
  getClassReport,
  getAverageGrade,
  getLetterGrade,
} from "../lib/studentUtils";

/*Import getClassReport and display:

Total enrolled students
Total passing students
Class average grade
A table showing each passing student with their name, subject, grade, and letter grade badge */
export default function GradeDashboard() {
  const enrolledAmount = getClassReport().enrollCount;
  const passingStudents = getClassReport().passingStudents;
  const classAvg = getAverageGrade(passingStudents);

  return (
    <div className="container mt-4">
      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Enrolled Students</p>
              <h3 className="fw-bold">{enrolledAmount}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Passing Students</p>
              <h3 className="fw-bold">{passingStudents.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Class Average</p>
              <h3 className="fw-bold">{classAvg}%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-header">
          <h5 className="mb-0">Passing Students</h5>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Grade</th>
                <th>Letter</th>
              </tr>
            </thead>
            <tbody>
              {passingStudents.map((student) => {
                const letter = getLetterGrade(student);
                return (
                  <tr key={student.name}>
                    <td>{student.name}</td>
                    <td>{student.subject}</td>
                    <td>{student.grade}%</td>
                    <td>
                      <span>{letter.letterGrade}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
