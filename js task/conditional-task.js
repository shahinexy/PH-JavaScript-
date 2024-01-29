/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 400;
if(burgerPrice >= 500){
    console.log('you got a free coke');
}
else{
    console.log('You have to pay 30tk for coke');
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 75;
const height = 1.79;
const bmi = weight / height**2

if(bmi < 18.5){
    console.log('You are underweight');
}
else if ( bmi >= 18.5 && bmi <= 24.9){
    console.log('You are normal');
}
else if( bmi >= 25 && bmi <= 29.9){
    console.log('You are overweight');
}
else{
    console.log('You are obese');
}


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const score = 85;
if(score >=90 && score <= 100){
    console.log('You got A');
}
else if(score >=80 && score <= 89){
    console.log('You got B');
}
else if(score >=70 && score <= 79){
    console.log('You got C');
}
else if(score >=60 && score <= 69){
    console.log('You got D');
}
else if(score >=0 && score <= 59){
    console.log('You got F');
}