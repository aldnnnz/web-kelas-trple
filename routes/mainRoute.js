var express = require('express');
var router = express.Router();
const userController = require('../controllers/mainController'); // Ganti dengan lokasi file yang sesuai

// Rute yang akan menampilkan data pengguna
router.get('/users', userController.getAllUsers);

module.exports = router;


