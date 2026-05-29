import React, { useState, useCallback } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const showMessage = useCallback(() => {
    setMessage("Hello");
  }, []);
  const handleClick = () => {
    setCount(count + 1);
    showMessage();
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>{message}</h3>
      <button onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}
export default App;