import Link from 'next/link';
import { News } from '@/types/news.type';
import styles from './news-card.module.css';

type NewsCardProps = {
  info: News;
}

export default function NewsCard({info}: NewsCardProps) {
  const {id, image_url, title, summary} = info;

  return (
    <div className={styles.card}>
      <Link href={`/${id}`}>
        <img src={image_url} alt={title} className={styles.image}/>
        <p className={styles.text}>{summary}</p>
      </Link>
    </div>
  );
}