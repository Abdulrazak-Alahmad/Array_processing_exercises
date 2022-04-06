let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [john, pete, mary]
function getAverageAge(arr) {
    let counter = sum = null;
    let text = '';
    let age = arr.map(x => x.age)
    for (let index = 0; index < age.length; index++) {
        sum += age[index];
        counter++;
        if (index === arr.length - 1) {
            text += `${arr[index].age}  `
        }
        else {
            text += `${arr[index].age} + `
        }
    }
    let avg = sum / counter;
    return `( ${text} ) / ${age.length} = ${avg}`
}

alert(getAverageAge(arr))   // (25 + 30 + 29) / 3 = 28