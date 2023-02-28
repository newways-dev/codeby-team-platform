import clsx from 'clsx'
import { Badge, IconButton, MoreOptions } from '@/components'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import styles from './NewsCard.module.scss'

import Time from '../../public/icons/time.svg'

export interface NewsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options?: boolean
  published: string
  title: string
  news: string[]
  color: 'black' | 'gray'
  settings?: boolean
}

export const NewsCard = ({
  className,
  published,
  title,
  news,
  color,
  settings,
}: NewsCardProps) => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div
      className={clsx(
        styles.newsCard,
        { [styles.newsCardBlack]: color === 'black' },
        { [styles.newsCardGray]: color === 'gray' },
        className
      )}
    >
      <div className={styles.badges}>
        <Badge title='Криптография' />
        <Badge title='Реверс-инжиниринг' />
        {settings && (
          <IconButton
            onClick={() => setShowMore(!showMore)}
            type='more'
            className={styles.dots}
          />
        )}
        {showMore && (
          <MoreOptions
            setOpen={setShowMore}
            tasks={false}
            className={styles.moreOptions}
          />
        )}
      </div>
      <span className={styles.title}>{title}</span>
      <ul>
        {news.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className={styles.publish}>
        <Time />
        Опубликовано {published}
      </div>
    </div>
  )
}
