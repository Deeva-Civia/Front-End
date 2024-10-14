// let bmi = function (berat, tinggi) {
//     let hasil = berat / (tinggi * tinggi);
//     return hasil;
// }
// let output = bmi(48, 1.62);
// console.log(output);

// IFFE
let bmi = (function (berat, tinggi) {
    let result = berat / (tinggi * tinggi);
    return result;
})(48, 1.62);

console.log(bmi);

// Callback function
function bmi2(callback) {
    let result = callback(48, 1.62);
    return result;
}

let output = bmi2(function (berat, tinggi) {
    hasil = berat / (tinggi * tinggi);
    return "Hasil BMI anda " + hasil;
})

console.log(output);