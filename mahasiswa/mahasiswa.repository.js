//mahasiswa.repository.js

const supabase = require("../config/db");

const findUsers = async () => {
  const mahasiswa = await supabase.from("data").select();
  return mahasiswa;
};

const findUsersByid = async (id) => {
  const mahasiswa = await supabase.from("data").select("*").eq("id", id);

  return mahasiswa;
};

const insertUser = async (mahasiswaData) => {
  const mahasiswa = await supabase
  .from('data')
  .insert({
     nim: mahasiswaData.nim, 
     nama: mahasiswaData.nama,
     ttl: mahasiswaData.ttl,
     hobi: mahasiswaData.hobi,
     cita: mahasiswaData.cita,
     pesan: mahasiswaData.pesan,
     role: null,
     sandi: mahasiswaData.sandi,
     id_gambar: null
    })

  return mahasiswa;
};
module.exports = {
  findUsers,
  findUsersByid,
  insertUser,

};
