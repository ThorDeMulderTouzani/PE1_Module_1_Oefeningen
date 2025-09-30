// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


//OPTELLER OEFENING EASY
// Voeg hier je eigen code in
// let getal1 = parseFloat (await userInput.question("Wat is het 1e getal?"));
// let getal2 = parseFloat (await userInput.question("Wat is het 2e getal?"));

// console.log(getal1 + getal2)


//OPTELLER OEFENING MEDIUM1
// let getal1 = 2550
// let getal2 = 50

// console.log(getal1 + getal2)
// console.log(getal1 * getal2)
// console.log(getal1 / getal2)
// console.log(getal1 - getal2)


//OPTELLER OEFENING MEDIUM2
// let geboorteJaar = parseFloat (await userInput.question("Wat is je geboortejaar?"));
// let toekomstJaar = parseFloat (await userInput.question("Wat is het komende jaar?"));
// let leeftijd1 = toekomstJaar - geboorteJaar;
// let leeftijd2 = leeftijd1 --

// console.log("Je zal " + leeftijd1 + " of " + leeftijd2 + " jaar oud zijn.")


//OPTELLER OEFENING HARD
let dagen = parseFloat (await userInput.question("Geef het aantal dagen."));
let uren = parseFloat (await userInput.question("Geef het aantal uren."));
let minuten = parseFloat (await userInput.question("Geef het aantal minuten."));
let seconden = parseFloat (await userInput.question("Geef het aantal seconden."));

let dagenSeconden = dagen * 86400;
let urenseconden = uren * 3600;
let minutenseconden = minuten * 60;
let secondenseconden = seconden * 1;

console.log("Aantal seconden: " + dagenSeconden + urenseconden + minutenseconden + secondenseconden)

process.exit();
