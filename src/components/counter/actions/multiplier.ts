import { IStateCounterReducer } from "../counterReducer";

const multiplier = (state: IStateCounterReducer) => {
  return {
    ...state,
    counter: state.counter * 2
  };
};

export { multiplier };
