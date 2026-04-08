const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const placesRoutes = require('./routes/places');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/placesDB'; // Change 'placesDB' to your desired database name
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/places', placesRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
