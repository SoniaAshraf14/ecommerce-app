import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import userReducer from "../features/auth/login/loginSlice";

// persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], 
};

// combine reducers
const rootReducer = combineReducers({
  auth: userReducer,
});

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// persistor
export const persistor = persistStore(store);

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;