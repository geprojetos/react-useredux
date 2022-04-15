import { IStateCounterReducer } from "../counterReducer";

const divisor = (state: IStateCounterReducer) => {
  return {
    ...state,
    counter: state.counter / 2
  };
};

export { divisor };
