import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slice';

const rootReducer = combineReducers({
    productsReducer,
})


export default rootReducer;
