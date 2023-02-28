import { AuthCard } from '@/page-components'
import styles from '../styles/RestorePassword.module.scss'

const RestorePassword = () => {
  return (
    <div className={styles.restorePassword}>
      <AuthCard type='password' />
    </div>
  )
}

export default RestorePassword
