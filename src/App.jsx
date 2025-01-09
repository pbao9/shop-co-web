import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incer = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p className="text-white">{count}</p>
      <button onClick={incer} className="bg-black">
        +
      </button>
    </>
  );
}

export default App;
