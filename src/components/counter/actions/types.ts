type ActionsCounterType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "multiplier" }
  | { type: "divisor" }
  | { type: "reset" };

export { ActionsCounterType };
