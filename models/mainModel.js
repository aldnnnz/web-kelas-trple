const supabase = require('../config/db');

const getAllUsers = async () => {
    const { data, error } = await supabase.from('tes').select();
    if (error) {
        throw error; // Tangani kesalahan dengan cara yang sesuai
    }
    return data || []; // Pastikan data diambil dalam bentuk array atau gunakan array kosong jika tidak ada data
}

module.exports = {
    getAllUsers
};
