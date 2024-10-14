//  IFFE & Callback Function
//  IFFE : fungsi yang dipanggil langsung. dan berjalan secara langsung tanpa harus dipanggil. Fungsi ini tidak memiliki nama. disebut juga dengan anonymous function  (self executing).

// cara penulisannya (syntax);
//  a. no paramater & argument & return value
// (function () {
//     // kode
//     console.log("Hello World");
// })

//  b. with paramater & argument & return value
// //                      parameter
// let output = (function (fullName) {
//     return "Hello" + fullName;
// //  argument
// })("John doe");

// console.log(output);

// Callback : function yang dikirim sebagai argument yang nantinya akan dicall oleh function yang lain.
// jadi argument yang dikirim berupa fungsi.
//  jadi dijalankan setelah fungsi tersebut selesai menyelesaikan tugasnya.
//  function callback selalu anonymous function.

// a. no parameter and argument
// function sayHello(callback) {
//     callback();
// }

// sayHello(function () {
//     console.log("Hello world");
// });

// b. with parameter and argument
function sayHello(callback) {
    let output = callback("John Doe");
    return output;
}

let output = sayHello(function (fullName) {
    return "Hello " + fullName;
});

console.log(output);

