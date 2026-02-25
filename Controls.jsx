function Controls({ setFilter, setShowLowAttendance }) {
  return (
    <div className="buttons">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Present")}>Present</button>
      <button onClick={() => setFilter("Absent")}>Absent</button>

      <button onClick={() => setShowLowAttendance(true)}>
        Show &lt;75%
      </button>

      <button onClick={() => setShowLowAttendance(false)}>
        Show All
      </button>
    </div>
  );
}

export default Controls;