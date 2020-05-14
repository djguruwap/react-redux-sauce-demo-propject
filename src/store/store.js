import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers/reducer";
import { resettableReducer } from "reduxsauce";
const middleweres = [logger];

//resetable
const resettable = resettableReducer("RESET");

const store = createStore(reducer, compose(applyMiddleware(...middleweres)));

export default store;
