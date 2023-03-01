import { TeamCard } from '@/page-components/TeamCard'
import Link from 'next/link'
import styles from './Teams.module.scss'

export const Teams = () => {
  return (
    <div className={styles.teams}>
      <Link href='/team'>
        <TeamCard className={styles.card} title='Название команды' count={5} />
      </Link>
    </div>
  )
}
