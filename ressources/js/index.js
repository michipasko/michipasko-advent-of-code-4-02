"use strict"

/*
--- Day 4: Secure Container ---

--- Part Two ---

An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

Given this additional criterion, but still ignoring the range rule, the following are now true:

112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).

How many different passwords within the range given in your puzzle input meet all of the criteria?
*/

let Password = require('./password-obj.js');

let input = "136760-595730"

let rangeFrom = input.split("-")[0]
let rangeTo = input.split("-")[1]


// console.log(rangeFrom)
// console.log(rangeTo)

let possiblePasswords = new Array

for (let i = rangeFrom; i <= rangeTo; i++) {
    possiblePasswords.push(String(i))
}


// Delete all password which don't have a double digit (1123 > true; 1234 > false)
let possiblePassWordsDoubleDigit = []

let itemBefore = 0

for (let possiblePassword of possiblePasswords) {
    for (let symbol of possiblePassword) {
        if (parseInt(symbol) === itemBefore) {
            possiblePassWordsDoubleDigit.push(possiblePassword)
            itemBefore = 0
            break
        } 

        else {
            itemBefore = parseInt(symbol)
        }
    }
}


// Delete more password :D
let possiblePassWordsFinalFiltered = []

let itemBefore2 = 0
let symbolCount = 0


for (let possiblePassword of possiblePassWordsDoubleDigit) {
    for (let symbol of possiblePassword) {
        symbolCount++

        if (parseInt(symbol) >= itemBefore2) {
            itemBefore2 = parseInt(symbol)
            
            if (symbolCount === possiblePassword.length) {
                possiblePassWordsFinalFiltered.push(possiblePassword)
                itemBefore2 = 0
                symbolCount = 0
            }
        }

        else {
            itemBefore2 = 0
            symbolCount = 0
            break
        }
    }
}


// Delete all passwords where the two adjacent matching digits are part of a larger group of matching digits.
let listWithPasswordObjects = []

for (let password of possiblePassWordsFinalFiltered) {
    let passwordObj = new Password(password)
    
    const passwordObjValues = Object.values(passwordObj.symbolCount)

    for (let symbol of passwordObjValues) {
        if (symbol === 1) {
            listWithPasswordObjects.push(password)
            break
        }
    }

}


// Solution
console.log("Solution Task 2:", listWithPasswordObjects.length)

