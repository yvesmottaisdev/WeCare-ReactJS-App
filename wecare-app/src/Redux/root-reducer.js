import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productsReducer from './products/products-reducer'
import categoriesReducer from './categories/categories-reducer'
import bestSellersReducer from './best-sellers/best-sellers-reducer'

const persistConfig = {

    key: 'root',
    storage: storage,
    whitelist: [],

}

const rootReducer = combineReducers({

    products: productsReducer,
    categories: categoriesReducer,
    bestSellers: bestSellersReducer

})

export default persistReducer(persistConfig, rootReducer)