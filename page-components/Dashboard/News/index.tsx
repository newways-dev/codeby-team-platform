import { NewsCard } from '@/page-components/NewsCard'
import styles from './News.module.scss'

export const News = () => {
  const news = [
    'В категории Криптография добавлено 2 таска: Неразгаданный шифр и Мария',
    'В категории Реверс-инжиниринг добавлен таск — randом??',
  ]

  return (
    <div className={styles.news}>
      <NewsCard
        news={news}
        title='Добавлены 3 новых таска'
        published='03.02.2023'
        color='gray'
        className={styles.card}
      />
      <NewsCard
        news={news}
        title='Добавлены 3 новых таска'
        published='03.02.2023'
        color='gray'
        className={styles.card}
      />
    </div>
  )
}
