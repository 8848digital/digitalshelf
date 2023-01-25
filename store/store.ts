/***************************************************************************/
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { Context, createWrapper } from "next-redux-wrapper";
import rootReducer from "./root_reducer";
// import ReduxThunk, { ThunkAction } from "redux-thunk";
// import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
// import { configureStore, Action } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   storage,
// };
/**********************************************************************************************/


// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
// const persistedReducer = persistReducer<RootState, any>(persistConfig, rootReducer)
// let makeStore = createStore(rootReducer, applyMiddleware(ReduxThunk));
// let makeStore = () =>  createStore(
//     rootReducer,
//     applyMiddleware(ReduxThunk),

// );

/********************************************************************************/
// let makeStore = () =>
//   configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV !== "production",
//   });
  /***************************************************************************** */

// let persistor = persistStore(makeStore)


/****************************************************************************
 export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
 ******************************************************************************/


// export { store }
// export { persistor }

/**
 // export const wrapper = createWrapper<AppStore>(makeStore);
 * 
 * 
 */

//  END //

// import { legacy_createStore as createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from "./root_reducer";

// const persistConfig = {
//   key: 'root',
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }


import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
console.log("persisted Reducer",persistedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})
 
export const persistor = persistStore(store)
// persistor.purge();