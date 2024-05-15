import { useState } from "react";
// import { Input } from "./Input";
import "./App.css";
// import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('useEffect: ', count)
  // }, [count])

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {" "} {count}
      </button>
      {/* <Input /> */}
    </div>
  );
}

export default App;
