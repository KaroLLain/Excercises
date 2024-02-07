import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleSubstractCount() {
    setCount((c) => c - step);
  }
  function handleAddCount() {
    setCount((c) => c + step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(+e.target.value)}></input>
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handleSubstractCount}>-</button>
        <input type="number" value={count} onChange={(e) => setCount(+e.target.value)}></input>
        <button onClick={handleAddCount}>+</button>
      </div>
      <div>
        <p>
          <span>{count === 0 ? 'Today is ' : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago today was `}</span>
          <span>{date.toDateString()}</span>
        </p>
        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
