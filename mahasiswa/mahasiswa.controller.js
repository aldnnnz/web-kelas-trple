//mahasiswa.controller.js
var express = require('express');
const { getAllUsers, getUserById, createUser } = require('./mahasiswa.service');
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
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUserData = req.body;
        
        const mahasiswa = await createUser(newUserData);

        res.send({
            data: mahasiswa,
            message: "create user success",
          });

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// router.patch('/:id', async (req, res) => {

// });

module.exports = router;


