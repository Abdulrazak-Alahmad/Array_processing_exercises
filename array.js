
var arr = [5, 3, 8, 1]

function filterRange(arr, x1, x2){
    firstIndex= arr.indexOf(x1)
    secondIndex= arr.indexOf(x2)
    let arrResult = [];
    for (let index =firstIndex; index <= secondIndex; index++) {
        arrResult[index] =arr[index]
        
    }
    
    return arrResult;

}

let filtered = filterRange(arr, 3, 1)
alert( filtered )  // (matching values)
