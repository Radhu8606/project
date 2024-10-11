const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


//MongoDB connection
mongoose.connect('mongodb+srv://radhuaghera3:Radhuaghera@123@labradhu.lwgor.mongodb.net/?retryWrites=true&w=majority&appName=labRadhu', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// const patientRoutes = require('./routes/patients.js');
// const doctorRoutes = require('./routes/doctors.js');
// const appointmentRoutes = require('./routes/appointments.js');

// app.use('/patients', patientRoutes);
// app.use('/doctors', doctorRoutes);
// app.use('/appointments', appointmentRoutes);

let port = 9009;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("nusadvnknk");
});
