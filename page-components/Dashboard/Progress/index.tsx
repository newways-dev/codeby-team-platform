import Image from 'next/image'
import styles from './Progress.module.scss'

import ScoreIcon from '../../../public/icons/Score.svg'
import RatingIcon from '../../../public/icons/Rating.svg'

import photo from '../../../public/images/avatar.jpg'
import { ProgressBar } from '@/components'

export const Progress = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.top}>
        <Image
          className={styles.image}
          src={photo}
          alt=''
          height={92}
          width={92}
        />
        <div className={styles.info}>
          <span>Никнейм</span>
          <p>0 дней с Codeby.Games</p>
        </div>
      </div>
      <div className={styles.data}>
        <div className={styles.item}>
          <ScoreIcon />
          <div className={styles.itemData}>
            <div>
              <span>Заработано баллов</span>
              <span>5600</span>
            </div>
            <ProgressBar progress='50' />
          </div>
        </div>
        <div className={styles.item}>
          <RatingIcon />
          <div className={styles.itemData}>
            <div>
              <span>Рейтинг</span>
              <span>6998</span>
            </div>
            <ProgressBar progress='100' />
          </div>
        </div>
      </div>
    </div>
  )
}
