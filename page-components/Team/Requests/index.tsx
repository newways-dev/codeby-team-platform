import { Button } from '@/components'
import styles from './Requests.module.scss'

export const Requests = () => {
  return (
    <div className={styles.requests}>
      <div className={styles.request}>
        <span>Имя пользователя</span>
        <div className={styles.buttons}>
          <Button variant='green' text='Принять' />
          <Button variant='red' text='Отклонить' />
        </div>
      </div>
      <div className={styles.request}>
        <span>Имя пользователя</span>
        <div className={styles.buttons}>
          <Button variant='green' text='Принять' />
          <Button variant='red' text='Отклонить' />
        </div>
      </div>
      <div className={styles.request}>
        <span>Имя пользователя</span>
        <div className={styles.buttons}>
          <Button variant='green' text='Принять' />
          <Button variant='red' text='Отклонить' />
        </div>
      </div>
      <div className={styles.request}>
        <span>Имя пользователя</span>
        <div className={styles.buttons}>
          <Button variant='green' text='Принять' />
          <Button variant='red' text='Отклонить' />
        </div>
      </div>
    </div>
  )
}
