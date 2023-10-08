import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { apiSlice } from './redux/mealsAPI';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import singleMeal from './redux/singleMeal';
import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore  } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ["singleMeal"],

}

const reducer = combineReducers({
    singleMeal:singleMeal,
    [apiSlice.reducerPath]:apiSlice.reducer
})

const thePersistreducer = persistReducer(persistConfig, reducer)


const store = configureStore({
  reducer: thePersistreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(apiSlice.middleware),
})
const persistor=persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </ApiProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
