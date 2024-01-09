const mainModel = require('../models/mainModel')

const getAllUsers = async (req, res)  => {
    try {
        const users = await mainModel.getAllUsers(); 
        res.render('main', { users }); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data pengguna.');
    }
};

const createNewUser = async (req, res) => {
    try {
        const nim = parseInt(req.body.nim);

        if (isNaN(nim)) {
        
            req.flash('error', 'NIM harus berupa angka.');
            return res.redirect('/admin');
        }
        const userData = {
            nim: nim,
            nama: req.body.nama,
            ttl: req.body.tgl_lahir,
            cita: req.body.cita,
            hobi: req.body.hobi,
            role: req.body.role,
            sandi: req.body.sandi,
            pesan: req.body.pesan
            
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
