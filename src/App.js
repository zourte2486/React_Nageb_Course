import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect runs after every render or when `count` changes
  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
  }, [count]); // Runs only when `count` changes

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const centeredStyle = {
    background: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
  };


  return (
    <div style={containerStyle}>
      <div style={centeredStyle}></div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;