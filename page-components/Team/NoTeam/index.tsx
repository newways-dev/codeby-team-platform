import { Button } from '@/components'
import { setCreateTeam, setJoinTeam } from '@/redux/modal/slice'
import { useDispatch } from 'react-redux'
import styles from './NoTeam.module.scss'

export const NoTeam = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.noTeam}>
      <p className={styles.title}>Вы не состоите в команде</p>
      <p className={styles.desc}>
        Создайте свою команду и пригласите в нее своих друзей или вступите по
        приглашению
      </p>
      <div className={styles.buttons}>
        <Button
          onClick={() => dispatch(setCreateTeam(true))}
          text='Создать команду'
          variant='green'
        />
        <Button
          onClick={() => dispatch(setJoinTeam(true))}
          text='Вступить в команду'
          variant='white'
        />
      </div>
    </div>
  )
}
