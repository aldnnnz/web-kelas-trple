const mainModel = require('../models/mainModel')

const getAllUsers = async (req, res)  => {
    try {
        const users = await mainModel.getAllUsers(); // Memanggil model untuk mendapatkan data
        res.render('main', { users }); // Merender tampilan EJS dengan data pengguna
    } catch (error) {
        // Tangani kesalahan jika terjadi
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data pengguna.');
    }
};

module.exports = {
    getAllUsers,
};
