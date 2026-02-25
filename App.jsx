import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import StudentTable from "./components/StudentTable"; 
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showLowAttendance, setShowLowAttendance] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((student) => ({
          ...student,
          attendance: Math.floor(Math.random() * 101),
        }));

        setStudents(updated);
      });
  }, []);

  return (
    <div className="container">
      <h1>🎓 Student Attendance</h1>

      <Controls
        setFilter={setFilter}
        setShowLowAttendance={setShowLowAttendance}
      />

      <StudentTable
        students={students}
        filter={filter}
        showLowAttendance={showLowAttendance}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
      />
    </div>
  );
}

export default App;