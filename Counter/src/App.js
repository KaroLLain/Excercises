import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(step);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleSubstractStep() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleAddStep() {
    setStep((s) => s + 1);
  }

  function handleSubstractCount() {
    setCount((c) => c - step);
  }
  function handleAddCount() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div>
        <button onClick={handleSubstractStep}>-</button>
        {` Step: ${step} `}
        <button onClick={handleAddStep}>+</button>
      </div>
      <div>
        <button onClick={handleSubstractCount}>-</button>
        {` Count: ${count} `}
        <button onClick={handleAddCount}>+</button>
      </div>
      <div>
        <p>
          <span>{count === 0 ? 'Today is ' : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago today was `}</span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
