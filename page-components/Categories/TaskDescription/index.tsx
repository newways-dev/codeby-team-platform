import clsx from 'clsx'
import Image from 'next/image'
import { Button, Check, Input } from '@/components'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import image from '../../../public/images/avatar.jpg'
import styles from './TaskDescription.module.scss'

export interface TaskDescriptionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  desc: string
  check: boolean
}

export const TaskDescription = ({
  className,
  title,
  desc,
  check,
}: TaskDescriptionProps) => {
  return (
    <div className={clsx(styles.taskDescription, className)}>
      <div className={styles.top}>
        <Image src={image} alt='' />
        <Check check={check} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.flag}>
        <div className={styles.inputContainer}>
          <Input
            value={'test value'}
            onChange={() => {}}
            status='default'
            placeholder='Флаг'
            type='text'
            className={styles.input}
          />
          <button>Отправить флаг</button>
        </div>
      </div>
      <div className={styles.info}>
        <p>
          Награда за выполнение: <span>500 баллов</span>
        </p>
        <p>
          IP: <span>62.173.140.174:10003</span>
        </p>
      </div>
    </div>
  )
}
