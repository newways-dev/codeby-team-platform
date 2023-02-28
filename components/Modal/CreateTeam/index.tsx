import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { Card } from '@/page-components'
import { setCreateTeam } from '@/redux/modal/slice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './CreateTeam.module.scss'

export const CreateTeam = () => {
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()

  return (
    <div className={styles.createTeam}>
      <Card
        desc='Создайте свою команду для совместного решения заданий'
        title='Создать команду'
      >
        <div className={styles.fields}>
          <Input
            title='Название'
            value={name}
            status='default'
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder='Введите название команды'
            type='text'
          />
          <Input
            title='Описание'
            value={desc}
            status='default'
            onChange={(e) => setDesc(e.currentTarget.value)}
            placeholder='Введите описание команды'
            type='textarea'
          />
          <Input
            title='Пароль'
            status='default'
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            placeholder='Введите пароль'
            type='password'
          />
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={() => dispatch(setCreateTeam(false))}
            text='Добавить'
            variant='green'
          />
          <Button
            onClick={() => dispatch(setCreateTeam(false))}
            text='Отменить'
            variant='red'
          />
        </div>
      </Card>
    </div>
  )
}
