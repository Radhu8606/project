import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9009/patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
