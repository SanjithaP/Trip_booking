const express = require('express');
const Place = require('../models/Place');

const router = express.Router();

// Get all places
router.get('/', async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new place
router.post('/', async (req, res) => {
    const { name, location, description, bestTimeToVisit, imageUrl } = req.body;

    const newPlace = new Place({
        name,
        location,
        description,
        bestTimeToVisit,
        imageUrl,
    });

    try {
        const savedPlace = await newPlace.save();
        res.status(201).json(savedPlace);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a specific place
router.get('/:id', async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        if (!place) return res.status(404).json({ message: 'Place not found' });
        res.json(place);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a place
router.put('/:id', async (req, res) => {
    try {
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlace) return res.status(404).json({ message: 'Place not found' });
        res.json(updatedPlace);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a place
router.delete('/:id', async (req, res) => {
    try {
        const deletedPlace = await Place.findByIdAndDelete(req.params.id);
        if (!deletedPlace) return res.status(404).json({ message: 'Place not found' });
        res.json({ message: 'Place deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
