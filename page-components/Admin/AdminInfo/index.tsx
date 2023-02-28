import { Card, ChartWithTags, PointsCard } from '@/page-components'
import styles from './AdminInfo.module.scss'

export const AdminInfo = () => {
  return (
    <div className={styles.adminInfo}>
      <Card className={styles.tasks} title='Задания'>
        <PointsCard value={49} title='Количество' />
        <PointsCard className={styles.done} value={2791} title='Решено' />
      </Card>
      <Card
        className={styles.tasksChart}
        title='Количество заданий по категориям'
      >
        <ChartWithTags />
      </Card>
      <Card className={styles.points} title='Баллы'>
        <PointsCard
          className={styles.totalPoints}
          title='Всего'
          value={20800}
        />
        <PointsCard title='Заработано' value={65645} />
      </Card>
      <Card
        className={styles.pointsChart}
        title='Количество баллов по категориям'
      >
        <ChartWithTags />
      </Card>
      <Card className={styles.amount}>
        <PointsCard
          className={styles.totalUsers}
          title='Всего юзеров'
          value={947}
        />
        <PointsCard title='Количество категорий' value={9} />
      </Card>
    </div>
  )
}
