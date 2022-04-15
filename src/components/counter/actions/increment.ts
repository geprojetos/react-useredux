import { IStateCounterReducer } from "../counterReducer";

const increment = (state: IStateCounterReducer) => {
  return {
    ...state,
    counter: state.counter + 1
  };
};

export { increment };
