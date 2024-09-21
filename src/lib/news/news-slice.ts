import { News } from '@/types/news.type';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from '../api-actions';

type NewsInitialStateType = {
    news: {
      data: News[];
      isLoading: boolean;
      isError: boolean;
    };
}

const initialState: NewsInitialStateType = {
    news: {
      data: [],
      isLoading: false,
      isError: false
    }
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.news.isLoading = true;
                state.news.isError = false;
            })
            .addCase(fetchNews.rejected, (state) => {
                state.news.isLoading = false;
                state.news.isError = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.news.isLoading = false;
                state.news.data = action.payload;
            })
    },
});