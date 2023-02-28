import { IconButton, MoreOptions } from '@/components'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { Chart } from '../../CompleteCard/Chart'
import styles from './CategoryCard.module.scss'

export interface CategoryCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string | StaticImageData
  title: string
  desc: string
  value: number
  type: 'user' | 'admin'
}

export const CategoryCard = ({
  image,
  className,
  title,
  desc,
  value,
  type,
}: CategoryCardProps) => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div className={clsx(styles.categoryCard, className)}>
      <div className={styles.left}>
        <Image src={image} alt='' />
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <span className={styles.desc}>{desc}</span>
        </div>
      </div>
      {type === 'user' && (
        <div className={styles.chart}>
          <Chart value={value} />
          <span className={styles.complete}>Выполнено:</span>
          <p>
            6<span>/20</span>
          </p>
        </div>
      )}
      {type === 'admin' && (
        <IconButton
          onClick={() => setShowMore(!showMore)}
          className={styles.moreButton}
          type='more'
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
  )
}
