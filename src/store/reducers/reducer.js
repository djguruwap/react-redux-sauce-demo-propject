import { createReducer } from "reduxsauce";
import Types from "../actions/Types";

const INITIAL_STATE = {
  count: 0,
};

const incrementReducer = (state = INITIAL_STATE, action) => {
  return { ...state, count: state.count + action.payload };
};
const decrementReducer = (state = INITIAL_STATE, action) => {
  return { ...state, count: state.count - action.payload };
};

const HANDLERS = {
  [Types.INCREMENT]: incrementReducer,
  [Types.DECREMENT]: decrementReducer,
};

export default createReducer(INITIAL_STATE, HANDLERS);
