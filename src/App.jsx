import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import Employees from "./Pages/Employées";
import Error from "./Pages/Error";
import MOCK_DATA from "./MOCK_DATA.json";


function getEmployees() {
  const employees = MOCK_DATA;
  return employees;
}

function App() {
  const [employees, setEmployees] = useState(getEmployees);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <Router>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<Form setEmployees={setEmployees} />}
          />
          <Route path="/employees" element={<Employees employees = {employees} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

