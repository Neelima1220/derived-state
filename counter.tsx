import * as React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div style={{ display: 'flex' }}>
      <button className="btn" onClick={decrement}>
        {' '}
        -{' '}
      </button>
      <p className="btn"> {count} </p>
      <button onClick={increment}> + </button>
    </div>
  );
}
