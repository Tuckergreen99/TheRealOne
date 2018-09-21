/**
 *   @author Tucker, Green
 *   @version 0.0.4
 *   @summary Project 1 code
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let Lotnum, Bedrooms, Bathrooms, Garage;

const HOMEV = 50000 , BEDV = 17000 , BATHV = 12500 , GARAGEV = 6000

function main() {
    setLotnum();
    setBedrooms();
    setBathrooms();
    setGarage()
    printResults();
    // This is a single line comment
}

main();

function setLotnum() {
    Lotnum = PROMPT.question("\nWhat is your Lot Number?:");
}

function setBedrooms() {
    Bedrooms = PROMPT.question("\nHow many bedrooms?");
}

function setBathrooms() {
    Bathrooms = PROMPT.question("\nHow many bathrooms?:");
}

function setGarage() {
    Garage = PROMPT.question('\nnumber of garages.')
}

function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("\nThe price of your' home on lot number", +Lotnum + " " + "is", HOMEV + (BEDV * Bedrooms) + (BATHV * Bathrooms) + (GARAGEV * Garage), "Dollars")
}