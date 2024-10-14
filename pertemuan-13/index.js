// Rest paramater & Spread Operator

// 1. Rest Parameter : outputnya selalu bertipe array
// kalau pakai rest parameter hanya gunakan 1 variable yaitu params lalu tambahkan 3 titik dibelakangnya, maka setiap argumentnya akan tersimpan pada
// parameter tersebut
// cth : tanpa rest parameter
const func1 = (param1, param2, param3) => {
  console.log(param1, param2, param3);
};

func1("A", "B", "C");

// cth : gunakan rest parameter. untuk nama variable di parameternya bebas terserah ingin memberikan nama apa
const func2 = (...params) => console.log(params);

func2("A", "B", "C");

// rest parameter dibilang sisa karena
// cth hanya ingin menyimpan di params c d dan e
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};
func3("A", "B", "C", "D", "E");
// rest parameter harus diletakan paling akhir.

// MINI EXERCISE:
// ubah dengan menggunakan rest parameter
// const penjumlahan = (a, b, c, d, e) => {
//   let arr = [a, b, c, d, e];
//   let hasil = 0;
//   arr.forEach((item) => (hasil += item));
//   return hasil;
// };

// console.log(penjumlahan(1, 2, 3, 4, 5));

const penjumlahan = (...arr) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5));

// 2. Spread Operator
// sama menggunakan 3 titik, tapi bukan di parameter.
// fungsinya untuk memecah array menjadi elemen"nya. dibuka dari pembungkusnya
// outputnya bukan lagi array.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // ini yang biasa atau masih dibungkus oleh array
console.log(...numbers); // yang ini sudah bukan lagi array, karena sudah di spread atau sudah dibuka pembungkusnya.

// kapan kita menggunakan spread operator? :
// a. saat duplikasi array : membuat array baru yang isinya sama seperti array sebelumnya.
// let numbers2 = numbers;
// numbers.push(6);
// console.log(numbers2)

// kalau seperti ini, yang dicopy adalah alamatnya bukan nilainya.
// cara mengatasi ini, gunakan spread operator
let numbers2 = [...numbers];
console.log(numbers2);

// b. untuk menggabungkan array. dan ini lebih berfungsi untuk objek
// b.1 Array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
let numbers3 = array1.concat(array1, array2); //ES5
let numbers4 = [...array1, ...array2, ...array3]; //ES6
console.log(numbers3);
console.log(numbers4);

// b.2 duplikasi Object
const john = {
  fullName: "John Doe",
  age: 30,
};

const john2 = { ...john, address: "Manado" };
console.log(john);
console.log(john2);

// b.3 menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combineObj = { ...obj1, ...obj2 };
console.log(combineObj);
