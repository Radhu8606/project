import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            Patient: {appointment.patientId.name}, Doctor: {appointment.doctorId.name}, Date: {new Date(appointment.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
