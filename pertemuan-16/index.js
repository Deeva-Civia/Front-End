// // Asynchronus Javascript

// // Syncronus -> single thread -> blocking
// // contoh: ini 4 proses akan dijalankan secara baris per baris
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3 = proses yang memakan waktu lama"); //blocking. karena memakan waktu lama. jadi proses ke 4 akan lama baru dijalankan/proses 4 akan menunggu.
// console.log("Proses 4");

// // Asynchronus -> multi thread -> non blocking
// // 2 jenis :
// // 1. Paralel : berjalan secara bersama-sama
// // dalam konsep javascript, paralel ini tidak bagus untuk digunakan
// setTimeout(() => {
//     console.log("Process 1");
// },3000)
// console.log("Process 2");
// setTimeout(() => {
//     console.log("Process 3");
// }, 3000)
// console.log("Process 4");
// // 2. Concurent : sama-sama multi thread tapi saling menunggu.
// setTimeout(() => {
//     console.log("Process 1");
//     setTimeout(() => {
//         console.log("Process 2");
//         setTimeout(() => {
//             console.log("Process 3");
//             setTimeout(() => {
//                 console.log("Process 4");
//             }, 3000)
//         }, 3000)
//     },3000)
// }, 3000)

// // Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil")
//     } else {
//         reject("Gagal")
//     }
// });

// // Pakai Promise
// // 2 cara:
// // 1. then-catch
// // 1.a then
// newPromise
//     .then((result) => {
//         console.log(result);
//     }) //ini akan dieksekusi saat resolve
//     // 1.b catch
//     .catch((error) => console.log(error));

// // contoh concurent
// newPromise
//     .then((result) => {
//         return result;
//     })
//     .then((result2) => {
//         console.log(result2);
//     })
//     .catch((error) => console.log(error));

// // ES7
// // cara kedua menggunakan promise : Async - await
// // selalu digunakan pada fungsi
// // kalau tambahkan async berarti code yang dibawahnya akan dijalankan secara asynchronus
// const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// };

// consumePromise()

// Contoh menggunakan Promise Fetch
// Fetch return promise
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// kalau pakai await
// const fetchJSONPlaceholder = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await response.json();
//   console.log(json);
// };

// fetchJSONPlaceholder();

//Axios
// import axios from "axios";
// const axios = require("axios");

// // axios
// //   .get("https://jsonplaceholder.typicode.com/users")
// //   .then((result) => console.log(result.data));

// (async () => {
//     let result = await axios.get("https://jsonplaceholder.typicode.com/users");
//     result.data.forEach((item) => console.log(item.username));
// })();