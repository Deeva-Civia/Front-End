// Cara 1 : Function declaration
// function greetings1() {
//     console.log("Hello world");
// };

// greetings1();

// // Cara 2 : Function expression
// let greetings2 = function () {
//     console.log("Hello world");
// }

// greetings2();

// parameter dan argument (input) & return(output)
// Cara 1:
//                  parameter
// function greetings1(fullName) {
//     return "Hello " + fullName
// }

// //                      argument
// let output = greetings1("John Doe");
// console.log(output);

// // Cara 2:
// let greetings2 = function (fullName) {
//     return "Hello " + fullName
// }

// let output2 = greetings2("Deeva Lolong");
// console.log(output2);

// Function Hoisting hanya berlaku pada cara satu. tidak bisa digunakan pada function variable (cara 2)

// let output = greetings1("John Doe");
// console.log(output);

// function greetings1(fullName) {
//     return "Hello " + fullName
// }

// Global Scope & Local Scope
// global = dapat diakses didalam atau diluar fungsi
// let x = 10;
// function foo() {
//     console.log(x);
// }

// foo();
// console.log(x);

// // local = dapat diakses didalam fungsi
// function foo2() {
//     let y = 20
//     console.log(y);
// }

// foo2();

// local block

