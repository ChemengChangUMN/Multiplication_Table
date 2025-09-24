/* LOOP EXAMPLES */
console.log('Here\' a for loop showing 1...10);\n')
for (let i = 0; i < 10; i++) {
    console.log(`${i}\n`);
}


console.log('Here\'s a do-while loop showing 1...10):\n')
let i = 0
do {
    console.log(i + '\n')
    i++
} while (i < 10)

console.log('Here\'s a while loop showing 1...10):\n')
let reagan = 0
while (reagan < 10) {
    console.log(`${reagan}\n`)
    reagan++
}


console.log('Here\'s a foreach loop interacting over an array showing 1...10):\n')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${num}\n`)
})


console.log('Here\'s a multipulcation table method rendered in the console with a loop):\n')
let timesTable = (to) => {
    console.log(`Here\'s a times table to ${to} \n`)

    if (Number.isInteger(to)) {
        // rows iterator
        for (let i = 1; i <= to; i++) {
            let row = ""
            // columns iterator
            for (let j = 1; j <= to; j++) {
                row += `${i * j}\t`
            }
            console.log(row)
        }
    } else {
        console.log(`Sorry, ${to} isn't a number`)
    }
}

timesTable(4)
timesTable(12)

