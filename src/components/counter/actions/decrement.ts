import { IStateCounterReducer } from "../counterReducer";

const decrement = (state: IStateCounterReducer) => {
  if (state.counter > 0) {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  return state;
};

export { decrement };
