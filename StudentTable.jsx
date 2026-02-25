import StudentRow from "./StudentRow";

function StudentTable({
  students,
  filter,
  showLowAttendance,
  selectedStudent,
  setSelectedStudent,
}) {
  const filteredStudents = students
    .filter((student) => {
      if (filter === "Present") return student.attendance >= 75;
      if (filter === "Absent") return student.attendance < 75;
      return true;
    })
    .filter((student) =>
      showLowAttendance ? student.attendance < 75 : true
    );

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              selectedStudent={selectedStudent}
              setSelectedStudent={setSelectedStudent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;