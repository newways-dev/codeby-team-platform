import { CompleteCard } from '@/page-components/CompleteCard'
import Link from 'next/link'
import styles from './Complete.module.scss'
import { NoComplete } from './NoComplete'

export const Complete = () => {
  return (
    <div className={styles.complete}>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
      <Link href='/categories/tasks'>
        <CompleteCard title='Администрирование' date='1 неделю назад' />
      </Link>
    </div>
  )
}
