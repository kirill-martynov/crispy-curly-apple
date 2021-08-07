import { combineReducers } from "redux";

import { homeReducer } from '../../screens/Home/store/reducers/homeReducer';

export const reducer = combineReducers({
  home: homeReducer,
});

export type TRootState = ReturnType<typeof reducer>
