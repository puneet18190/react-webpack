import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import mathReducer from "./reducers/math_reducer";
import userReducer from "./reducers/user_reducer";

const myLogger = (state) => (next) => (action) => {
   // console.log("Logged Action: ", action);
   next(action);
};

// const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger, logger))
const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(logger))

store.subscribe(() => {
	// console.log("Store updated!", store.getState());
})

export default store;