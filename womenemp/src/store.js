import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import allReducers from "./Reducers";
import thunk from "redux-thunk";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk)),
  
);

export default store;