import { News } from '@/types/news.type';
import { RootState } from '../store';

export const getNews = (state: Pick<RootState, 'news'>): News[] => state['news'].news.data;
export const getLoadingStatus = (state: Pick<RootState, 'news'>): boolean => state['news'].news.isLoading;
export const getErrorStatus = (state: Pick<RootState, 'news'>): boolean => state['news'].news.isError;
