'use client'
import { useAppSelector } from '@/lib/hooks';
import { getNews } from '@/lib/news/news-selectors';
import Link from 'next/link';
import NotFound from '../not-found';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';

export default function ImageInfo() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return <NotFound />
  }
  const newsInfo = useAppSelector(getNews).find((item) => item.id === +id);

  if (!newsInfo) {
    return <NotFound />
  }
  
  const {image_url, summary, title} = newsInfo;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img src={image_url} alt={title} className={styles.width}/>
        <h3>{title}</h3>
        <p className={styles.width}>{summary}</p>
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
