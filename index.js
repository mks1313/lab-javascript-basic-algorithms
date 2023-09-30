// Iteration 1: Names and Input
console.log('I am ready')
let hacker1 = 'Maximiliano';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Garmin';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if ( driver.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
    

// Iteration 3: Loopsnode index.js

let name1 = hacker1;
console.log(name1.toUpperCase() + " ");

for ( let i = 0; i < hacker1.length; i++ ) {
    console.log(hacker1[i]);
}

let name2 = hacker2;
hacker2 = ""
for (let i = name2.length - 1; i >= 0; i--) {
hacker2 += name2[i];
}
console.log(hacker2);




if (hacker1.localeCompare(hacker2) === 0) {
    console.log('What?! You both have the same name?');

} else if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} if (hacker1.localeCompare(hacker2)) {
    console.log('Yo, the navigator goes first, definitely.');
}
