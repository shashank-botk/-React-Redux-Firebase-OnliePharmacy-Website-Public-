
import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer';
import ordersReducer from './Orders/orders.reduces';


export const rootReducer = combineReducers ({
    user: userReducer,
    productsData: productsReducer,
    cartData: cartReducer,
    ordersData: ordersReducer,
});


const configStorage = {
    key: 'root',
    storage,
    whitelist: [ 'cartData' ]
}

export default persistReducer(configStorage, rootReducer);