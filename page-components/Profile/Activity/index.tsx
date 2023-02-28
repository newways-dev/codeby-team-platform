import clsx from 'clsx'
import { Chart } from './Chart'
import styles from './Activity.module.scss'
import { Select } from '@/components'
import { useState } from 'react'

export const Activity = () => {
  const years = ['2020', '2022', '2023']
  const [active, setActive] = useState<string>(years[0])

  return (
    <div className={clsx(styles.activity)}>
      <div className={styles.chart}>
        <Chart />
      </div>
      <Select
        type='select'
        active={active}
        setActive={setActive}
        variant='gray'
        showTitle={false}
        className={styles.select}
        title={years[1]}
        options={years}
      />
    </div>
  )
}
