import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [operation, setOperation] = useState('sum');
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleCalculate = () => {
    switch (operation) {
      case 'sum':
        setResult(num1 + num2);
        break;
      case 'rest':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <div>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <label>
        Number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="sum"
          checked={operation === 'sum'}
          onChange={handleOperationChange}
        />
        Sum
      </label>
      <label>
        <input
          type="radio"
          value="rest"
          checked={operation === 'rest'}
          onChange={handleOperationChange}
        />
        Rest
      </label>
      <label>
        <input
          type="radio"
          value="multiply"
          checked={operation === 'multiply'}
          onChange={handleOperationChange}
        />
        Multiply
      </label>
      <label>
        <input
          type="radio"
          value="divide"
          checked={operation === 'divide'}
          onChange={handleOperationChange}
        />
        Divide
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
