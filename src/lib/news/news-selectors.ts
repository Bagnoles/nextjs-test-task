import { News } from '@/types/news.type';
import { RootState } from '../store';

export const getNews = (state: Pick<RootState, 'news'>): News[] => state['news'].news.data;