import { applyMiddleware, compose, createStore, Store } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./reducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

export default function configureStore(state = initialState): Store {
  const middlewares = [thunk];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    reducer,
    state,
    composeEnhancers(middlewaresEnhancer)
  );

  return store;
}
