import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    increment: (n) => ({ type: "INCREMENT", payload: n }),
    decrement: (n) => ({ type: "DECREMENT", payload: n }),
  },
  {}
);
