import clsx from 'clsx'
import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './TeamCard.module.scss'
import image from '../../public/images/team-image.png'
import Arrow from '../../public/icons/RightArrow.svg'

export interface TeamCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  count: number
}

export const TeamCard = ({ className, title, count }: TeamCardProps) => {
  return (
    <div className={clsx(styles.teamCard, className)}>
      <div className={styles.left}>
        <Image src={image} alt='' width={62} height={62} />
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.count}>{count} участников</p>
        </div>
      </div>
      <Arrow />
    </div>
  )
}
