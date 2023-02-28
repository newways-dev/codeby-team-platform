import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Chart } from './Chart'
import RightArrow from '../../public/icons/RightArrow.svg'
import styles from './CompleteCard.module.scss'

export interface CompleteCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  date: string
}

export const CompleteCard = ({ className, title, date }: CompleteCardProps) => {
  return (
    <div className={clsx(styles.completeCard, className)}>
      <div className={styles.left}>
        <Chart value={90} />
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
      <RightArrow />
    </div>
  )
}
