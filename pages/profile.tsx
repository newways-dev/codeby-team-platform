import clsx from 'clsx'
import { withLayout } from '@/layout/Layout'
import {
  Activity,
  Card,
  Complete,
  Info,
  Points,
  Progress,
} from '@/page-components'
import styles from '../styles/Profile.module.scss'

const Profile = () => {
  const complete = true

  return (
    <div className={styles.profile}>
      <Card title='Мой прогресс' className={styles.progress}>
        <Progress />
      </Card>
      <Card title='Информация' className={styles.info}>
        <Info />
      </Card>
      <Card
        title='Выполнено заданий'
        className={clsx(styles.complete, { [styles.noComplete]: !complete })}
      >
        <Complete />
      </Card>
      <Card title='Мои баллы' className={styles.points}>
        <Points />
      </Card>
      <Card title='Активность' className={styles.activity}>
        <Activity />
      </Card>
    </div>
  )
}

export default withLayout(Profile)
