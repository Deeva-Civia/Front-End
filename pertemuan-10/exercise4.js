// Array Exercise
let people = ["Greg", "Marry", "Devon", "James"];

// 1.
for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2.
people.forEach(function (data) {
    console.log(data)
});

// 3.
people.shift();
console.log(people);

// 4. 
people.pop();
console.log(people);

// 5. 
people.unshift("Matt");
console.log(people);

// 6. 
people.push("Deeva");
console.log(people);

// 7.
for (i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Marry") {
        break;
    }
}

// 8.
let copy = people.slice(2);
console.log(copy);

// 9. 
people = ['Matt', 'Marry', 'Devon', 'Deeva'];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// 10.
let withBob = people.concat("Bob");
console.log(withBob);


// Object Exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1.
programming.languages.push("Go");
console.log(programming);

// 2. 
programming["difficulty"] = 7;
console.log(programming);

// 3. 
delete programming.jokes;
console.log(programming);

// 4.
programming.isFun = true;
console.log(programming);

// 5.
let output = programming.languages.map(function (item, idx) {
    return `${idx} - ${item}`;
})
console.log(output);