import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Card } from '@/page-components/Card'
import styles from './TaskAddition.module.scss'
import { Button, Select } from '@/components'
import Link from 'next/link'

export interface TaskAdditionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  timeLeft: string
  help: string[]
  files: string[]
}

export const TaskAddition = ({
  className,
  timeLeft,
  help,
  files,
}: TaskAdditionProps) => {
  return (
    <div className={clsx(styles.taskAddition, className)}>
      <Card title='До перезагрузки задания'>
        <div className={styles.timeLeft}>
          <span>{timeLeft}</span>
        </div>
        <Select
          type='dropdown'
          variant='gray'
          showTitle
          className={styles.files}
          title='Файлы'
          options={files}
        />
        <div className={styles.help}>
          {help.map((item, index) => (
            <Select
              type='dropdown'
              variant='gray'
              showTitle
              key={index}
              title={`Подсказка №${index + 1}`}
              options={Array(item)}
            />
          ))}
        </div>
        <Link href='/categories'>
          <Button variant='white' text='Вернуться к категориям' />
        </Link>
      </Card>
    </div>
  )
}
