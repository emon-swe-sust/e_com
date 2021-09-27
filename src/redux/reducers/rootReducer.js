import { combineReducers } from 'redux'
import { itemReducer } from './itemReducer'
import { selectedItemReducer } from './selectedItemReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:' root',
    storage
}

const rootReducer = combineReducers({
    itemReducer,
    selectedItemReducer,
})

export default persistReducer(persistConfig, rootReducer)