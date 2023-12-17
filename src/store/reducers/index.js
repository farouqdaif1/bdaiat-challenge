import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    productsReducer,
    cartReducer
})


export default rootReducer;
