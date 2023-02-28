import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  title?: string
  desc?: string
}

export const Card = ({ className, children, title, desc }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
