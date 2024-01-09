const supabase = require('../config/db');

const getAllUsers = async () => {
    const { data, error } = await supabase.from('data').select();
    if (error) {
        throw error;
    }
    return data || []; 
}

const createNewUser = async (userData) => {
    try {
        console.log('createNewUser - userData:', userData);

        const { data, error } = await supabase.from('data').insert([userData]);

        console.log('createNewUser - data:', data);
        console.log('createNewUser - error:', error);
        
        if (error) {
            throw error;
        }
        
        if (data && data.length > 0) {
            return data[0]; 
        } else {
            throw new Error('Data pengguna tidak dapat ditambahkan.');
        }
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getAllUsers,
    createNewUser,
};
