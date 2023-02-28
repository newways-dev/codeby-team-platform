import { AuthCard } from '@/page-components'
import styles from '../styles/SignUp.module.scss'

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <AuthCard type='login' />
    </div>
  )
}

export default SignUp
