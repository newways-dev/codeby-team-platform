import { NewsCard } from '@/page-components/NewsCard'
import styles from './AdminNews.module.scss'

export const AdminNews = () => {
  const news = [
    'В категории Криптография добавлено 2 таска: Неразгаданный шифр и Мария',
    'В категории Реверс-инжиниринг добавлен таск — randом??',
  ]

  return (
    <div className={styles.adminNews}>
      <NewsCard
        settings
        published='03.02.2023'
        title='Добавлены 3 новых таска'
        news={news}
        color='black'
        className={styles.card}
      />
      <NewsCard
        settings
        published='03.02.2023'
        title='Добавлены 3 новых таска'
        news={news}
        color='black'
        className={styles.card}
      />
      <NewsCard
        settings
        published='03.02.2023'
        title='Добавлены 3 новых таска'
        news={news}
        color='black'
        className={styles.card}
      />
      <NewsCard
        settings
        published='03.02.2023'
        title='Добавлены 3 новых таска'
        news={news}
        color='black'
        className={styles.card}
      />
      <NewsCard
        settings
        published='03.02.2023'
        title='Добавлены 3 новых таска'
        news={news}
        color='black'
        className={styles.card}
      />
      <NewsCard
        settings
        published='03.02.2023'
        title='Добавлены 3 новых таска'
        news={news}
        color='black'
        className={styles.card}
      />
    </div>
  )
}
