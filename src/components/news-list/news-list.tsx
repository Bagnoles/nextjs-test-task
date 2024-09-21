import { News } from '@/types/news.type';
import NewsCard from '../news-card/news-card';
import styles from './news-list.module.css';

type NewsListProps = {
  data: News[];
}

export default function NewsList({data}: NewsListProps) {

    return (
      <div className={styles.list}>
        {data.map((item) => <NewsCard info={item} key={item.id} />)}
      </div>
    );
}
  