const { findUsers } = require("./mahasiswa.repository")

//mahasiswa.service.js
const getAllUsers = async () => {
    const mahasiswa = await findUsers();
    return mahasiswa;
}

module.exports = {
    getAllUsers,
}