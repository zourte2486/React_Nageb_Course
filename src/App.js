import React from 'react';


export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center'}}>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 10)}>Increase</button>
    </div>
  );
}
