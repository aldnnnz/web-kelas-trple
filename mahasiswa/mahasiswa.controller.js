//mahasiswa.controller.js
var express = require('express');
const { getAllUsers } = require('./mahasiswa.service');
var router = express.Router();

router.get('/', async (req, res) =>{
    const mahasiswa = await getAllUsers();
    res.send(mahasiswa);
});

router.get('/:id', async (req, res) =>{
    
});

router.post('/', async (req, res) => {

});

router.patch('/:id', async (req, res) => {

});

module.exports = router;


