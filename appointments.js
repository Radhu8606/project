const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Create a new appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.json(appointment);
});

// Get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find().populate('patientId doctorId');
  res.json(appointments);
});

module.exports = router;
