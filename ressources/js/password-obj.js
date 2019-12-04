module.exports = class Password {
    constructor(password) {
        this.password = password
        this.symbolCount = {
            zero: 0,
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            six: 0,
            seven: 0,
            eight: 0,
            nine: 0
        }
       
        let previousSymbol = null
        for (let symbol of password) {
            symbol = parseInt(symbol)
            if (symbol === 0 && previousSymbol === symbol) {
                this.symbolCount.zero ++
            }

            else if (symbol === 1 && previousSymbol === symbol) {
                this.symbolCount.one ++ 
            }

            else if (symbol === 2 && previousSymbol === symbol) {
                this.symbolCount.two ++ 
            }

            else if (symbol === 3 && previousSymbol === symbol) {
                this.symbolCount.three ++ 
            }

            else if (symbol === 4 && previousSymbol === symbol) {
                this.symbolCount.four ++ 
            }

            else if (symbol === 5 && previousSymbol === symbol) {
                this.symbolCount.five ++ 
            }

            else if (symbol === 6 && previousSymbol === symbol) {
                this.symbolCount.six ++ 
            }

            else if (symbol === 7 && previousSymbol === symbol) {
                this.symbolCount.seven ++ 
            }

            else if (symbol === 8 && previousSymbol === symbol) {
                this.symbolCount.eight ++ 
            }

            else if (symbol === 9 && previousSymbol === symbol) {
                this.symbolCount.nine ++ 
            }

            previousSymbol = symbol
        }  
    }
}

/* let password1 = "00112233445566778899"
let test = new Password(password1)
console.log(test.symbolCount)

const values = Object.values(test.symbolCount)

for (let e of values) {
    if (e === 1) {
        console.log(password1)
        break
    }
} */