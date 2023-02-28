import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { TaskStatus } from '@/types/task'
import { Check, IconButton, MoreOptions, Status } from '@/components'
import styles from './TaskCard.module.scss'

import image from '../../../public/images/avatar.jpg'
import clsx from 'clsx'

export interface TaskCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  status?: TaskStatus
  title: string
  desc: string
  check?: boolean
  type: 'admin' | 'user'
  category?: string
  idNumber?: number
}

export const TaskCard = ({
  className,
  type,
  category,
  idNumber,
  title,
  desc,
  status,
  check,
}: TaskCardProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)

  switch (type) {
    case 'user':
      return (
        <div className={clsx(styles.taskCard, className)}>
          <div className={styles.top}>
            <Image src={image} alt='' />
            {status && <Status status={status} />}
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.bottom}>
            <button>Подробнее</button>
            <Check check={check ? check : false} />
          </div>
        </div>
      )
    case 'admin':
      return (
        <div className={clsx(styles.taskCard, className)}>
          <div className={styles.top}>
            <Image src={image} alt='' />
            <IconButton
              onClick={() => setShowOptions(!showOptions)}
              type='more'
            />
            {showOptions && (
              <MoreOptions
                setOpen={setShowOptions}
                tasks
                className={styles.moreOptions}
              />
            )}
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.info}>
            {category && idNumber && (
              <>
                <div>
                  <p>Категория</p>
                  <p>ID</p>
                </div>
                <div>
                  <span>{category}</span>
                  <span>{idNumber}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )

    default:
      return <></>
  }
}
