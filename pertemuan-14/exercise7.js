// 1. Destructuring (Array & Object)
// 1.a Array
let hewan = ["kucing", "kelinci", "anjing", "serigala"];
let [hewan1, hewan2, hewan3, hewan4] = hewan;
console.log(hewan1);
console.log(hewan2);
console.log(hewan3);
console.log(hewan4);
// 1.b Object
let mobil = {
    merek: 'Toyota',
    tahun: 2022,
    warna: 'Silver'
}
let { merek, tahun, warna } = mobil;
console.log(merek);
console.log(tahun);
console.log(warna);

// 2. Destructuring dengan mengambil sebagian item (Array & Object)
// 2.a Array
let [angka1, , angka3, , angka5] = [1, 2, 3, 4, 5];
console.log(angka1);
console.log(angka3);
console.log(angka5);
// 2.b Object
let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'red'
};
let { brand, color } = car
console.log(brand);
console.log(color);

// 3. Destructuring dengan menggunakan default value (Array & Object)
// 3.a Array
let colors = ['pink', 'blue'];
let [color1, color2, color3 = 'green'] = colors;
console.log(color1);
console.log(color2);
console.log(color3);
// 3.b Object
let settings = {
    theme: 'dark'
};
let { theme, fontSize = 16, language = 'en' } = settings;
console.log(theme);
console.log(fontSize);
console.log(language);

// 4. Destructuring dengan menggunakan rest operator (Array & Object)
// 4.a Array
let animals = ['kucing', 'anjing', 'kelinci', 'hamster', 'ikan'];
let [pet1, pet2, ...otherPets] = animals;
console.log(pet1, pet2); 
console.log(otherPets); 
// 4.b Object
let student = {
    name: 'Deeva',
    age: 19,
    grade: 'A',
    major: 'Computer Science',
};
let { name, age, ...otherInfo } = student;
console.log(name, age); 
console.log(otherInfo);

// 5. Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.
// soal nomor 1
// const calculateAge = (birthYear) => `2019 - ${birthYear}`;


// const yearUntilRetirement = (object) => {
// 	let age = calculateAge(object.year);
// 	const retirement = 60 - age;

// 	if(retirement > 0){
//         console.log(`${object.firstName} retires in ${retirement} years`);
// 	} else {
//         console.log(`${object.firstName} is already retired.`);
// 	}
// }

// yearUntilRetirement({year: 1987, firstName: 'John'});
const calculateAge = (birthYear) => `2019 - ${birthYear}`;


const yearUntilRetirement = ({year, firstName}) => {
	let age = calculateAge(year);
	const retirement = 60 - age;

	if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
	} else {
        console.log(`${firstName} is already retired.`);
	}
}

yearUntilRetirement({year: 1987, firstName: 'John'});

// soal nomor 3
// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };

// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });

// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// ubah menjadi destructuring
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

const [radius1, radius2] = [21, 7];
const [area21, area7] = [
    calculateArea({ radius: radius1, power }),
    calculateArea({ radius: radius2, power })
];

console.log(`area with ${radius1} radius: ${area21}, and area with ${radius2} radius: ${area7}`);