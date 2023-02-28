import { Card } from '@/page-components/Card'
import { Complete } from '@/page-components/Dashboard/Complete'
import { Info } from '@/page-components/Profile/Info'
import { Points, Progress, TopTen } from '@/page-components'
import styles from './Info.module.scss'

export const TeamInfo = () => {
  return (
    <div className={styles.teamInfo}>
      <Card title='Прогресс команды' className={styles.progress}>
        <Progress />
      </Card>
      <Card title='Описание' className={styles.info}>
        <Info />
      </Card>
      <Card title='Выполнено заданий' className={styles.complete}>
        <Complete />
      </Card>
      <Card title='Баллы' className={styles.points}>
        <Points />
      </Card>
      <Card title='Рейтинг Топ-10 участников команды' className={styles.topTen}>
        <TopTen />
      </Card>
    </div>
  )
}
