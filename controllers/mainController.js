const mainModel = require('../models/mainModel')

const getAllUsers = async (req, res)  => {
    try {
        const users = await mainModel.getAllUsers(); // Memanggil model untuk mendapatkan data
        res.render('main', { users }); // Merender tampiln EJS dengan data pengaguna
    } catch (error) {
        // Tangani kesalahan jika terjadi
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data pengguna.');
    }
};

const createNewUser = async (req, res) => {
    try {
        // Ambil data pengguna 
        const userData = {
            nama: req.body.nama,
            // Tambahkan data
        };
        const result = await mainModel.createNewUser(userData);
        if (result) {
            req.flash('success', 'Data pengguna berhasil disisipkan.');
            res.redirect('/admin');
        } else {
            res.redirect('/admin');
        }
    } catch (error) {
        console.error(error);
        req.flash('error', 'Gagal menyisipkan data pengguna baru.');
        res.status(500).send('Terjadi kesalahan saat menyisipkan data pengguna baru.');
    }
};

module.exports = {
    getAllUsers,
    createNewUser
};
