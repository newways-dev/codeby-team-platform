import { useState } from 'react'
import { Input } from '@/components/UI/Input'
import { Select } from '@/components/UI/Select'
import Close from '../../../public/icons/close-red.svg'
import { Card } from '@/page-components'
import { useDispatch } from 'react-redux'
import styles from './JoinTeam.module.scss'
import { setJoinTeam } from '@/redux/modal/slice'
import { Button } from '@/components/UI/Button'

export const JoinTeam = () => {
  const teams = ['One', 'Two', 'Three']
  const [team, setTeam] = useState<string>(teams[0])
  const dispatch = useDispatch()

  return (
    <div className={styles.joinTeam}>
      <Card title='Вступить в команду'>
        <div className={styles.fields}>
          <div>
            <p className={styles.title}>Команда</p>
            <Select
              showTitle={false}
              type='select'
              title='Команда'
              options={teams}
              placeholder='Выберите команду'
              variant='gray'
              active={team}
              setActive={setTeam}
            />
          </div>
        </div>
        <Close
          onClick={() => dispatch(setJoinTeam(false))}
          className={styles.close}
        />
        <div className={styles.buttons}>
          <Button
            onClick={() => dispatch(setJoinTeam(false))}
            text='Войти'
            variant='green'
          />
          <Button
            onClick={() => dispatch(setJoinTeam(false))}
            text='Отменить'
            variant='red'
          />
        </div>
      </Card>
    </div>
  )
}
