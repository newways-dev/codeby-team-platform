import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Image from 'next/image'
import Delete from '../../public/icons/close-red.svg'
import image from '../../public/images/team-gray-image.png'
import styles from './ParticipantCard.module.scss'
import clsx from 'clsx'

export interface ParticipantCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nickname: string
  email: string
  role?: 'Создатель' | 'Участник'
  showRole: boolean
}

export const ParticipantCard = ({
  nickname,
  email,
  role,
  showRole,
  className,
  ...props
}: ParticipantCardProps) => {
  return (
    <div {...props} className={clsx(styles.participantCard, className)}>
      <div className={styles.wrapper}>
        <Image src={image} alt='' width={48} height={48} />
        <div className={styles.text}>
          <p className={styles.nickname}>{nickname}</p>
          <p className={styles.email}>{email}</p>
        </div>
        {showRole && <p className={styles.role}>{role}</p>}
      </div>
      <Delete />
    </div>
  )
}
