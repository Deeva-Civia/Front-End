export let fullName = "John Doe";
export let number = [1, 2, 3, 4, 5];
export let sayGreetings = () => "Hello World"

// kalau pakai alias (as)
export let tempatTinggal = "Airmadidi";

// export default. dalam satu module hanya boleh ada 1 export default
// export dan import default biasanya dibuat dalam 1 modul sendiri yang namanya sama dengan nama fungsi. jadi nama file index.js ditulis sama seperti nama fungsi yang akan di export.
export default sayGreetings;