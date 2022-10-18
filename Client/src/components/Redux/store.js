import { createStore, applyMiddleware } from "redux";
import { partData } from "./reducer";
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig,partData )

 
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
   export { store, persistor }
  

