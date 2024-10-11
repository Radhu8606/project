import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from './components/PatientList';
import DoctorList from './components/DoctorList';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/appointments" element={<AppointmentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
