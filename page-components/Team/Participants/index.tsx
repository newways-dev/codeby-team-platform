import { ParticipantCard } from '@/page-components/ParticipantCard'
import styles from './Participants.module.scss'

export const Participants = () => {
  return (
    <div className={styles.participants}>
      <ParticipantCard
        showRole
        nickname='Nickname'
        email='ashfaksayem@gmail.com'
        role='Создатель'
      />
      <ParticipantCard
        showRole
        nickname='Nickname'
        email='ashfaksayem@gmail.com'
        role='Участник'
      />
      <ParticipantCard
        showRole
        nickname='Nickname'
        email='ashfaksayem@gmail.com'
        role='Участник'
      />
      <ParticipantCard
        showRole
        nickname='Nickname'
        email='ashfaksayem@gmail.com'
        role='Участник'
      />
      <ParticipantCard
        showRole
        nickname='Nickname'
        email='ashfaksayem@gmail.com'
        role='Участник'
      />
    </div>
  )
}
