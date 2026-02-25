function StudentRow({ student, selectedStudent, setSelectedStudent }) {
  return (
    <tr
      onClick={() => setSelectedStudent(student.id)}
      className={selectedStudent === student.id ? "selected" : ""}
    >
      <td>{student.name}</td>
      <td>{student.address?.city}</td>
      <td className={student.attendance >= 75 ? "green" : "red"}>
        {student.attendance}%
      </td>
    </tr>
  );
}

export default StudentRow;