const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = function sortUtama(arrnama,fnCallbackSort){
  let arrHasil=[]; 
  for (let a=0;a<arrnama.length;a++){
    arrHasil.push(a+"."+arrnama[a]);
  }
  const arrHasils = fnCallbackSort(arrHasil);
  return arrHasils;
}


// const sorter = sortUtama(names,urutkan);

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
// const sortAscending = null;

const sortAscending = function urutkan(arrnya){
  const arrsort= arrnya.sort;
  return arrsort;
}
// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
// const sortDescending = null;
const sortDescending = function urutkan(arrnya){
  const arrsort= arrnya.reverse;
  return arrsort;
}
// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
