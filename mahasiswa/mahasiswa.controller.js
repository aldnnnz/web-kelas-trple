//mahasiswa.controller.js
var express = require('express');
const { getAllUsers, getUserById } = require('./mahasiswa.service');
var router = express.Router();
const { v4: uuidv4, validate: uuidValidate } = require('uuid');


router.get('/', async (req, res) =>{
    const mahasiswa = await getAllUsers();
    res.send(mahasiswa);
});

router.get('/:id', async (req, res) =>{
    try {
        const userId = req.params.id;
        const user = await getUserById(userId); 

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// router.post('/', async (req, res) => {

// });

// router.patch('/:id', async (req, res) => {

// });

module.exports = router;


