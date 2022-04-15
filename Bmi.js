let johnHeight = 15;
let markHeight = 18;
let johnMass = 59;
let markMass = 65;
let johnBmi = johnMass / johnHeight * johnHeight;
let markBmi = markMass / markHeight * markHeight;

let condition = johnBmi < markBmi
console.log("Is mark BMI higher than john? " + condition)