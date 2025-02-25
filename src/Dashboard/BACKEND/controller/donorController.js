const Donor = require('../models/Donar');

// Get all donors
const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Create a new donor
const createDonor = async (req, res) => {
  console.log("Create Donar API hit!")
  try {
    const { name, email, foodType, quantity } = req.body;

    if (!name || !email || !foodType || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newDonor = new Donor({ name, email, foodType, quantity });
    await newDonor.save();

    res.status(201).json({ message: 'Donor added successfully', donor: newDonor });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getAllDonors, createDonor };
