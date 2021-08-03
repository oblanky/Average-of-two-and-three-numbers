function averageOfTwo(num1,num2) {
    let total = num1 + num2;
    let avg = total/2;
    return avg;
}

function averageOfThree(num1, num2, num3) {
    let total = num1 +num2 +num3
    let avg = total/3;
    return avg;
}

let result1 = averageOfTwo(5,15);
let result2 = averageOfThree(8,9,7);
console.log(result1, result2);