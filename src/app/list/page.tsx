'use client'
import NewsList from '@/components/news-list/news-list';
import { useAppSelector } from '@/lib/hooks';
import { getNews } from '@/lib/news/news-selectors';
import Link from 'next/link';

export default function List() {
  const news = useAppSelector(getNews);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <NewsList data={news} />
        <Link
          href="/"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          На главную
        </Link>
      </main>
    </div>
  );
}
