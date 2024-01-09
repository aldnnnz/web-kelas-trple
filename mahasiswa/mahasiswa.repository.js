//mahasiswa.repository.js
const supabase = require('./config/db')
const findUsers = async () => {
    const mahasiswa = await supabase.from('data').select();
    return mahasiswa;
}
const findUsersByid = async (id) => {
    const mahasiswa = await supabase.from('data')
    .select('*')
    .eq('id', id);
    return mahasiswa;
}
module.exports = {
    findUsers,
    findUsersByid
}