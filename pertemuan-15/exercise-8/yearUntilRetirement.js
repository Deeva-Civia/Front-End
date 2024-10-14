import { calculateAge } from "./calculateAge.js";

export const yearUntilRetirement = ({ year, firstName }) => {
    let age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}
