import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import { reducer } from "./reducer";
import history from "./history";

const initialState = {};

export default function configureStore(state = initialState): Store {
  const middlewares = [thunk, routerMiddleware(history)];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    reducer,
    state,
    composeWithDevTools(middlewaresEnhancer)
  );

  return store;
}
