import { withLayout } from '@/layout/Layout'
import {
  Card,
  Complete,
  News,
  Progress,
  TopFifty,
  TopTen,
} from '@/page-components'
import clsx from 'clsx'
import styles from '../styles/Home.module.scss'

const Home = () => {
  const complete = true

  return (
    <div className={styles.homeGrid}>
      <Card title='Прогресс' className={styles.progress}>
        <Progress />
      </Card>
      <Card title='Последние новости' className={styles.news}>
        <News />
      </Card>
      <Card title='Рейтинг Топ-10 участников' className={styles.top10}>
        <TopTen />
      </Card>
      <Card title='Рейтинг Топ-50 участников' className={styles.top50}>
        <TopFifty />
      </Card>
      <Card
        title='Выполнено заданий'
        className={clsx(styles.complete, { [styles.noComplete]: !complete })}
      >
        <Complete />
      </Card>
    </div>
  )
}

export default withLayout(Home)
