import React from 'react';
const Result = ({ bmi }) => {
 let message = '';
 if (bmi < 18.5) {
 message = 'Underweight';
 } else if (bmi >= 18.5 && bmi < 24.9) {
 message = 'Normal weight';
 } else if (bmi >= 25 && bmi < 29.9) {
 message = 'Overweight';
 } else {
 message = 'Obese';
 }
 return (
 <div>
 <h2>BMI Result</h2>
 <p>Your BMI: {bmi}</p>
 <p>{message}</p>
 </div>
 );
};
export default Result;