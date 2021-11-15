// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReduser from './contacts/contacts-reduser';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//     contacts: contactsReduser,
// })
// const store = createStore(rootReducer, composeWithDevTools());

const persistConfig = {
  key: 'contacts',
  storage,
}

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}), logger];

const rootReducer = combineReducers({
    contacts: persistReducer(persistConfig,contactsReduser) 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer, 
    middleware,
    devTools: process.env.NODE_ENV === 'development'
})

const persistor = persistStore(store)

export default {store, persistor};