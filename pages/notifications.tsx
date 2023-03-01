import { withLayout } from '@/layout/Layout'
import styles from '../styles/Notifications.module.scss'

import Icon from '../public/icons/time.svg'

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <div className={styles.notification}>
        <span>Название уведомления</span>
        <Icon />
      </div>
      <div className={styles.notification}>
        <span>Название уведомления</span>
        <Icon />
      </div>
      <div className={styles.notification}>
        <span>Название уведомления</span>
        <Icon />
      </div>
      <div className={styles.notification}>
        <span>Название уведомления</span>
        <Icon />
      </div>
      <div className={styles.notification}>
        <span>Название уведомления</span>
        <Icon />
      </div>
    </div>
  )
}

export default withLayout(Notifications)
