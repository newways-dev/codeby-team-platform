import { withLayout } from '@/layout/Layout'
import styles from '../styles/Team.module.scss'

const Team = () => {
  return (
    <div className={styles.team}>
      <h1>TEAM PAGE</h1>
    </div>
  )
}

export default withLayout(Team)
