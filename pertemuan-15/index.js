import { fullName, number } from "./utils.js"; //import biasa
import sayGreetings from "./utils.js"; // import default tidak perlu pakai tanda kurung kurawal
console.log(fullName);
console.log(number);
console.log(sayGreetings);

// kalau pakai alias (as)
import { tempatTinggal as address } from "./utils.js";
console.log(address);