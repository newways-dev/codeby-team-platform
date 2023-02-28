import { AuthCard } from '@/page-components'
import styles from '../styles/SignIn.module.scss'

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <AuthCard type='register' />
    </div>
  )
}

export default SignIn
