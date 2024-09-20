let nama = ["Milku", "Coklat"]; 

// const susu = {
//     merk : "Ultra",
//     rasa : "Starwberry",
//     ukuran : "300 Ml",
//     harga : 7000,
//     deskripsi : "Susu enak",
// }

// document.getElementById('merk').innerHTML = susu.merk;
// document.getElementById('rasa').innerHTML = susu.rasa;
// document.getElementById('ukuran').innerHTML = susu.ukuran;
// document.getElementById('harga').innerHTML = susu.harga;
// document.getElementById('deskripsi').innerHTML = susu.deskripsi;


// menambahkan variabel pakai function(){ return PAKAI TURUNAN this.yang mau dipanggil }

const susu = {
    merk: "Ultra",
    rasa: "Starwberry",
    ukuran: "300 Ml",
    harga: 7000,
    deskripsi: function(){
        return this.merk + " yang enak itu rasa " + this.rasa + " harganya Rp." + this.harga;
    },
}

document.getElementById('merk').innerHTML = susu.merk;
document.getElementById('rasa').innerHTML = susu.rasa;
document.getElementById('ukuran').innerHTML = susu.ukuran;
document.getElementById('harga').innerHTML = susu.harga;
document.getElementById('deskripsi').innerHTML = susu.deskripsi();

// console.log([susu]);