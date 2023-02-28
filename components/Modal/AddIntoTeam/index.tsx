import { Card, ParticipantCard } from '@/page-components'
import styles from './AddIntoTeam.module.scss'
import Delete from '../../../public/icons/delete-tag.svg'
import { Button } from '@/components/UI/Button'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAddIntoTeam } from '@/redux/modal/slice'

type UserType = {
  nickname: string
}

const usersData = [
  {
    nickname: 'John',
  },
  {
    nickname: 'Kate',
  },
  {
    nickname: 'Alice',
  },
  {
    nickname: 'Mark',
  },
  {
    nickname: 'Vika',
  },
]

export const AddIntoTeam = () => {
  const [selected, setSelected] = useState<UserType[]>([])
  const [users, setUsers] = useState<UserType[]>([])
  const dispatch = useDispatch()

  const handleSelect = (user: UserType) => {
    setSelected(selected.concat(user))

    const newUsers = users.filter((item) => item.nickname !== user.nickname)
    setUsers(newUsers)
  }

  const handleDelete = (user: UserType) => {
    const newArr = selected.filter((item) => item.nickname !== user.nickname)
    setSelected(newArr)

    const findIndex = usersData.findIndex(
      (item) => item.nickname === user.nickname
    )
    const findUser = usersData[findIndex]
    setUsers(users.concat(findUser))
  }

  useEffect(() => {
    setUsers(usersData)
  }, [])

  return (
    <div className={styles.addIntoTeam}>
      <Card title='Добавить участников'>
        <div className={styles.wrapper}>
          <p className={styles.title}>Пригласить</p>
          <div className={styles.selected}>
            {selected.length > 0 &&
              selected.map((item, index) => (
                <div key={index} className={styles.tag}>
                  <p>{item.nickname}</p>
                  <Delete onClick={() => handleDelete(item)} />
                </div>
              ))}
            <Button
              onClick={() => dispatch(setAddIntoTeam(false))}
              text='Пригласить'
              variant='green'
            />
          </div>
          <p className={styles.title}>Участники</p>
          <div className={styles.users}>
            {users.map((user, index) => (
              <ParticipantCard
                onClick={() => handleSelect(user)}
                key={index}
                className={styles.card}
                nickname={user.nickname}
                email='ashfaksayem@gmail.com'
                showRole={false}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
