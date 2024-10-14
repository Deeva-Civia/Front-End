const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0
    //Change to map function
    numbers.map((i) => sum += i);
    return sum;
}
export default addNumber;
console.log(addNumber(1,2,3,4,5,6,7));