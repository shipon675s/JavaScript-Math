//! JavaScript Math:

/*
//! If need round Number
let number = 30.5546546465;
console.log(Math.round(number));

//! If need ceil Number
let number1 = 30.0000001;
console.log(Math.ceil(number1));

//! If need floor Number
let number2 = 30.999999999;
console.log(Math.floor(number2));

//! Square Value
console.log(Math.pow(3, 3));

//! Root Value
console.log(Math.sqrt(64));

//! Absulate Value
console.log(Math.abs(-64));

//! Minimum Value
console.log(Math.min(4,2,3,9,5,7));

//! Maximum Value
console.log(Math.max(4,2,3,9,5,77));

//! PI Value
console.log(Math.PI);

console.log(Math.sin(90 * Math.PI / 180));
console.log(Math.cos(60 * Math.PI / 180));
console.log(Math.tan(60 * Math.PI / 180));

//! Random Value
console.log(Math.random());
console.log(Math.random().toFixed(2));
console.log(Math.random().toFixed(2) * 20);
console.log(Math.floor(Math.random().toFixed(2) * 20 + 1));



//! Just Practice:::::
let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil(Math.random() * upperValue);
console.log(resultValue);

*/


function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let imageSource = 'img/' + randomNumber + '.png';

    document.getElementById('ludo').src = imageSource;
}