🎓 Student Attendance Tracker
A clean, responsive React application designed to manage and visualize student attendance data. This project fetches real-world user data and simulates attendance metrics to demonstrate state management, conditional rendering, and component modularity in React.

🚀 Features
Dynamic Data Fetching: Retrieves student names and locations from the JSONPlaceholder API.

Attendance Simulation: Automatically generates random attendance percentages for each student upon initialization.

Smart Filtering:

Filter by status: All, Present (≥ 75%), or Absent (< 75%).

Toggle view for Low Attendance students specifically.

Interactive UI:

Clickable rows to highlight selected students.

Visual cues: Green text for passing attendance, red text for low attendance.

Responsive table layout.

🛠️ Technical Stack
Frontend: React (Hooks: useState, useEffect)

Styling: CSS3 (Standard CSS with conditional class mapping)

API: JSONPlaceholder (Users endpoint)

📂 Project Structure
Plaintext
src/
├── components/
│   ├── Controls.js       # Action buttons for filtering and toggles
│   ├── StudentTable.js   # Logic for filtering and mapping student data
│   └── StudentRow.js     # Individual row component with selection logic
├── App.js                # Root component; manages global state and API calls
└── App.css               # Styling for layout and conditional formatting
⚙️ Component Overview
App.js
The "Brain" of the application. It handles the initial fetch request, manages the students array, and keeps track of the current filter and selectedStudent states.

Controls.js
A presentation component that provides the user interface for modifying filters. It triggers state updates in the parent App component.

StudentTable.js
Handles the core business logic for data display. It filters the student list based on the user's current selection before mapping the data to the UI.

StudentRow.js
A granular component that renders a single student's data. It uses conditional logic to apply styles (e.g., highlighting a selected row or coloring attendance percentages).
