import { Tag } from '@/components'
import { Tags } from '@/types/tags'
import { ChartPie } from '../PieChart'
import styles from './ChartWithTags.module.scss'

export const ChartWithTags = () => {
  return (
    <div className={styles.chartWithTags}>
      <ChartPie />
      <div className={styles.tags}>
        <Tag active type={Tags.Administration} />
        <Tag active type={Tags.Crypto} />
        <Tag active type={Tags.Forensics} />
        <Tag active={false} type={Tags.Entertainment} />
        <Tag active={false} type={Tags.ReverseEngineering} />
        <Tag active={false} type={Tags.Steganography} />
        <Tag active={false} type={Tags.Web} />
        <Tag active={false} type={Tags.PWN} />
        <Tag active={false} type={Tags.Quest} />
      </div>
    </div>
  )
}
