import { configureStore , applyMiddleware , combineReducers  } from "@reduxjs/toolkit";
import { PersistConfig , persistReducer, persistStore  } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {setupListeners} from "@reduxjs/toolkit/query"
import editReducer from "./edit";
import thunk from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
  edit: editReducer
});
const PersistConfig = {
  key: "root",
  storage
};
const  persistedReducer  = persistReducer(PersistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger]
});
export const persister = persistStore(store)
export const selectUser = (state: any) => state.edit;
setupListeners(store.dispatch) 
