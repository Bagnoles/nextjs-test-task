'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { fetchNews } from '@/lib/api-actions';

export default function StoreProvider({
    children
  }: {
    children: React.ReactNode
  }) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
      storeRef.current = makeStore();
      storeRef.current.dispatch(fetchNews());
    }
  
    return <Provider store={storeRef.current}>{children}</Provider>
}
