import { TeamCard } from '@/page-components/TeamCard'
import styles from './Teams.module.scss'

export const Teams = () => {
  return (
    <div className={styles.teams}>
      <TeamCard title='Название команды' count={5} />
      <TeamCard title='Название команды' count={5} />
    </div>
  )
}
