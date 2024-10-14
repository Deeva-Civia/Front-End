// // Javascript Loop

// // Array object

// let students = [
//     {
//         id: 1,
//         firstName: "John",
//         grade: 80
//     },
//     {
//         id: 2,
//         firstName: "Jane",
//         grade: 90
//     },
//     {
//         id: 3,
//         firstName: "Bob",
//         grade: 100
//     },
// ]
// console.log(students);

// // // 1. for - loop
// // for (let i = 0; i < students.length; i++){
// //     console.log(students[i].firstName);
// // }

// // // 2. while - loop
// // let i = 0;
// // while (i < students.length) {
// //     console.log(students[i].firstName);
// //     i++;
// // }

// // // 3. do while - loop
// // let i = 0;
// // do {
// //     console.log(students[i].firstName);
// //     i++;
// // } while (i < students.length);

// // 4. array built-in method
// // 4.a  foreach() ==> tidak ada return valuenya. jika return akan hasilnya null
// // students.forEach(function (item) {
// //     console.log(item.firstName);
// // });

// // 4.b map() ==> ada return value
// // cara 1
// // students.map(function (item) {
// //     console.log(item.firstName);
// // });
// // cara 2 ==> akan return value firstName dalam bentuk array
// // let output = students.map(function (item) {
// //     return item.firstName;
// // });
// // console.log(output);

// // 4.c filter() ==> akan mereturn berupa array/banyak data
// let output1 = students.filter(function (item) {
//     return item.grade >= 90;
// });
// console.log(output1);

// // 4.d find() ==> akan mereturn satu nilai yang paling atas/paling pertama
// let output2 = students.find(function (item) {
//     return item.grade >= 90;
// });
// console.log(output2);

// // 4.e findIndex()
// // contoh mencari index dari nama jane
// let output3 = students.findIndex(function (item) {
//     return item.firstName === "Jane";
// });
// console.log(output3);







