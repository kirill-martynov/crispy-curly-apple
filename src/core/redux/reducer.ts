import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";

import { homeReducer } from "@Home/store/reducers/homeReducer";

export const reducer = combineReducers({
  router: connectRouter(history),
  home: homeReducer,
});

export type TRootState = ReturnType<typeof reducer>;
