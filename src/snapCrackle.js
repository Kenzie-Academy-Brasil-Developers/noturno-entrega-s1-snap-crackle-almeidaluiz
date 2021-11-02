// Seu código vai aqui


function snapCrackle(maxValue) {
    let myArray = [];
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
    // console.log(myArray.join(', ')); // linha comentada para a entrega.
    return myArray.join(', ');
}

snapCrackle(15)