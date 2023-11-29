// let Mobil = {
// // properti objek
// brand:"Toyota", // Merek Mobil
// model: "Kijang",// Tipe atau Model Mobil
// year:"2007"// Tahun pembuatan

// // Method Objek
// start: function () {
//     console.log("Engine Started");
// },

// drive (speed) {
//     console.log(`Driving at ${speed} km/h`);
// },
// }

let Murid = {
  name: "Dimas",
  nomor_urut: 3,
  kelas: "JCWD",

  menjawab() {
    console.log("saya bisa menjawab!");
  },
  absen(nomor_urut) {
    console.log(`ini absen saya ${nomor_urut}`);
  },
};
console.log(Murid.name);
Murid.menjawab();
Murid.absen("3");

class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }
  bicara() {
    console.log(`${this.nama} mengeluarkan suara ${this.suara}`);
  }
}
