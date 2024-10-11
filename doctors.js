const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Create a new doctor
router.post('/', async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.json(doctor);
});

// Get all doctors
router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

module.exports = router;
