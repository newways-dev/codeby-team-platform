import { CompleteCard } from '@/page-components/CompleteCard'
import styles from './Complete.module.scss'
import { NoComplete } from './NoComplete'

export const Complete = () => {
  return (
    <div className={styles.complete}>
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      <CompleteCard title='Администрирование' date='1 неделю назад' />
      {/* <NoComplete /> */}
    </div>
  )
}
