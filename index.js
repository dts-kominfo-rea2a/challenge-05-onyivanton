const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

// const sorter = null;
function sorter(arrnama,fnCallbackSort){
  let arrHasil=[]; 
  const arrCallbak = fnCallbackSort(arrnama);
  for (let a=0;a<arrCallbak.length;a++){
    arrHasil.push(a+1 +"."+arrCallbak[a]);
  }
  return arrHasil;
}


// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
// const sortAscending = null;

function sortAscending(arrnya){
  const arrsort= arrnya.sort();
  return arrsort;
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
// const sortDescending = null;
function sortDescending(arrnya){
  const arrDesc= arrnya.reverse();
  return arrDesc;
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





// console.log(sorter(names,sortAscending));
// console.log(sorter(names,sortDescending));
