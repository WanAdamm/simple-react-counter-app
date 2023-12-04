import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="d-flex flex-column align-self-center">
      <div className="d-flex flex-column ">
        <div className="align-self-center">
          <Counter count={counter} />
        </div>
        <div className="d-flex justify-content-around">
          <Button children="increment" onClick={incrementCounter} />
          <Button children="decrement" onClick={decrementCounter} />
        </div>
      </div>
    </div>
  );
}

export default App;
