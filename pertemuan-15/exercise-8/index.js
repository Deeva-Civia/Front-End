// 1
import { yearUntilRetirement } from './yearUntilRetirement.js';

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2 
import addNumber from './addNumbers.js';
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3
import { phi, power, calculateArea } from './circleCalculator.js';

const [radius1, radius2] = [21, 7];
const [area21, area7] = [
    calculateArea({ radius: radius1, power }),
    calculateArea({ radius: radius2, power })
];

console.log(`area with ${radius1} radius: ${area21}, and area with ${radius2} radius: ${area7}`);

//4
console.log(makeAjaxRequest("www.google.com"));