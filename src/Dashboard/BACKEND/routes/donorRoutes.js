const express = require('express');
const { getAllDonors, createDonor } = require('../controller/donorController');

const router = express.Router();

router.get('/', getAllDonors);
router.post('/', createDonor);

module.exports = router;
