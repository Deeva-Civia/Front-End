// String literals, Arrow Function &
// Default Parameter

// 3. String Literal
let fullName = "John Doe";
let age = 30;
let address = "Manado";

let kalimat = "Halo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
console.log(kalimat);
console.log(kalimat2);

// 4. Arrow Function
// fungsi biasa
function sayGreetings(fullName) {
    return `Halo my name is ${fullName}`;
}

console.log(sayGreetings("john doe"));
// arrow function
const sayGreetings2 = (fullName) => {
    return `Hallo my name is ${fullName}`;
};

console.log(sayGreetings2('john doe'));

// 4.b Arrow Function pada iffe
let output = (() => "Hello")();
console.log(output);
// 4.c Arrow Function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 5. Default Paramater
const sayGreetings3 = (fullName, age, address) => {
    // untuk mengatasi undefined
    if (fullName === undefined) { 
        fullName = "John Doe";
    } 
    if (age === undefined) {
        age = 30;
    }
    if (address === undefined) {
        address = "Manado"
    }
    console.log(`hallo nama saya ${fullName}, umur saya ${age} tahun. dan saya tinggal di ${address}`);
}

sayGreetings3("Deeva", 19);

// bisa juga gunakan default value/parameter seperti ini
const sayGreetings4 = (fullName = "John Doe", age = 20, address = "Airmadidi") => {
    console.log(`hallo nama saya ${fullName}, umur saya ${age} tahun. dan saya tinggal di ${address}`);
}

sayGreetings4("civia", 14 ,"manado")