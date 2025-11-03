import { combineReducers } from "redux";
import { cartreducer } from "./reducer";

export const rootReducer = combineReducers({
	cartreducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
