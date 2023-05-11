import thunk from "redux-thunk";
//@ts-ignore
import AsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import { persistReducer, persistStore } from "redux-persist";
//@ts-ignore

import { rootReducer } from './reducer';
import { applyMiddleware, createStore } from "@reduxjs/toolkit";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


export default store;
