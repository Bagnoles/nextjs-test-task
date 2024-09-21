import { combineReducers } from '@reduxjs/toolkit';
import { newsSlice } from './news/news-slice';

export const rootReducer = combineReducers({
    'news': newsSlice.reducer
});
