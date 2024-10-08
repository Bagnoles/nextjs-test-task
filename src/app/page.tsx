'use client'
import Slider from '@/components/slider/slider';
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';
import { getErrorStatus, getLoadingStatus, getNews } from '@/lib/news/news-selectors';

export default function Home() {
  const news = useAppSelector(getNews);
  const isError = useAppSelector(getErrorStatus);
  const isLoading = useAppSelector(getLoadingStatus);

  if (isError) {
    return <p>Произошла ошибка. Попробуйте обновить страницу.</p>
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {isLoading ? <p>Идет загрузка...</p> : <Slider data={news} />}
        <Link
          href="/list"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Смотреть всё
        </Link>
      </main>
    </div>
  );
}
