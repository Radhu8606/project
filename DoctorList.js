import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor._id}>{doctor.name} - {doctor.specialization}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
