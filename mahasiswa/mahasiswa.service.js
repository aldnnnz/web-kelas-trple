const { findUsers, findUsersByid, insertUser } = require("./mahasiswa.repository")

//mahasiswa.service.js
const getAllUsers = async () => {
    const mahasiswa = await findUsers();
    return mahasiswa;
};
const getUserById = async (id) => {
    try {
        const mahasiswa = await findUsersByid(id);

        if (!mahasiswa || mahasiswa.length === 0) {
            throw new Error("Mahasiswa not found");
        }
        return mahasiswa;
    } catch (error) {
        throw error; 
    }
};

const createUser = async (newUser) => {
    const mahasiswa = await insertUser(newUser);

    return mahasiswa;
};
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
}