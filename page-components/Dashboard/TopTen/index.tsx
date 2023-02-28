import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Chart } from './Chart'
import styles from './TopTen.module.scss'

export const TopTen = () => {
  return (
    <div className={styles.topTen}>
      <Chart />
      <p>
        *Здесь находятся только лучшие. Выполняй таски, зарабатывай очки и
        попадай в топ, если тебя здесь ещё нет.
      </p>
    </div>
  )
}
