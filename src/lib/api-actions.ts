import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';
import { News, NewsWithPagination } from '@/types/news.type';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>();

export const fetchNews = createAppAsyncThunk<News[], undefined>('news/getNews',
    async (_arg, {extra: api}) => {
        const {data} = await api.get<NewsWithPagination>('/articles/');
        return data.results;
    }
);
