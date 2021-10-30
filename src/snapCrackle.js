// Seu código vai aqui
let myArray = [];

function snapCrackle(maxValue) {

    for (counter = 1; counter <= maxValue; counter++) {
        if (counter % 2 !== 0 && counter % 5 === 0) {

            myArray.push("SnapCrackle")

        } else if (counter % 2 !== 0) {

            myArray.push("Snap")

        } else if (counter % 5 === 0) {

            myArray.push("Crackle")

        } else if (counter % 2 === 0 && counter % 5 !== 0) {

            myArray.push(counter)

        }
    }
    return myArray
}

snapCrackle(15)
console.log(myArray.join(', '));