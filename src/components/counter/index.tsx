import { useReducer } from "react";
import { initialState, counterReducer } from "./counterReducer";

export default function Counter() {
  const [state, dispacth] = useReducer(counterReducer, initialState);

  return (
    <div className="counter-container">
      <h3 className="counter-text">Counter: {state.counter}</h3>
      <div className="counter-button-container">
        <button
          className="global-button counter-button-success"
          onClick={() => dispacth({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="global-button counter-button-info"
          onClick={() => dispacth({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="global-button counter-button-warning"
          onClick={() => dispacth({ type: "multiplier" })}
        >
          Multiplier
        </button>
        <button
          className="global-button counter-button-dark"
          onClick={() => dispacth({ type: "divisor" })}
        >
          Divisor
        </button>
        <button
          className="global-button counter-button-primary"
          onClick={() => dispacth({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
