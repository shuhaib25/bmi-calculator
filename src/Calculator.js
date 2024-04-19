import React, { useState } from 'react';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters

    if (weightInKg > 0 && heightInM > 0) {
      const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default Calculator;
