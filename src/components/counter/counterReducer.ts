import {
  increment,
  decrement,
  multiplier,
  divisor,
  reset,
  ActionsCounterType
} from "./actions/";

interface IStateCounterReducer {
  counter: number;
}

const initialState: IStateCounterReducer = {
  counter: 0
};

const counterReducer = (
  state: IStateCounterReducer,
  action: ActionsCounterType
) => {
  const actions = {
    increment,
    decrement,
    multiplier,
    divisor,
    reset
  };

  return actions[action.type](state);
};

export { initialState, counterReducer, IStateCounterReducer };
