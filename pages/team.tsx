import clsx from 'clsx'
import { useState } from 'react'
import { withLayout } from '@/layout/Layout'
import { Button, IconButton, Select } from '@/components'
import { NoTeam, Participants, Requests, TeamInfo } from '@/page-components'
import styles from '../styles/Team.module.scss'
import { useDispatch } from 'react-redux'
import { setAddIntoTeam } from '@/redux/modal/slice'

const Team = () => {
  const team = true
  const [page, setPage] = useState<string>('Инфо')
  const [edit, setEdit] = useState<boolean>(false)
  const dispatch = useDispatch()

  return (
    <div className={styles.team}>
      {!team ? (
        <NoTeam />
      ) : (
        <>
          <div className={styles.mobileToolbar}>
            <Select
              type='select'
              active={page}
              setActive={setPage}
              variant='black'
              showTitle={false}
              title={page}
              options={['Инфо', 'Участники', 'Заявки']}
            />

            <div className={styles.mobileButtons}>
              {page === 'Инфо' && (
                <>
                  <IconButton
                    onClick={() => {
                      setEdit(!edit)
                    }}
                    type='edit'
                  />
                  <IconButton type='delete' />
                </>
              )}
              {page === 'Участники' && (
                <>
                  <Button
                    onClick={() => dispatch(setAddIntoTeam(true))}
                    className={styles.invite}
                    text='Пригласить'
                    variant='green'
                  />
                </>
              )}
            </div>
          </div>
          <div className={styles.toolbar}>
            <ul>
              <li
                className={clsx({ [styles.active]: page === 'Инфо' })}
                onClick={() => setPage('Инфо')}
              >
                Инфо
              </li>
              <li
                className={clsx({ [styles.active]: page === 'Участники' })}
                onClick={() => setPage('Участники')}
              >
                Участники
              </li>
              <li
                className={clsx({ [styles.active]: page === 'Заявки' })}
                onClick={() => setPage('Заявки')}
              >
                Заявки
              </li>
            </ul>
            <div className={styles.buttons}>
              {page === 'Инфо' && (
                <>
                  <IconButton
                    onClick={() => {
                      setEdit(!edit)
                    }}
                    type='edit'
                  />
                  <IconButton type='delete' />
                </>
              )}
              {page === 'Участники' && (
                <>
                  <Button
                    onClick={() => dispatch(setAddIntoTeam(true))}
                    className={styles.invite}
                    text='Пригласить'
                    variant='green'
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
      {team && page === 'Инфо' && <TeamInfo />}
      {team && page === 'Участники' && <Participants />}
      {team && page === 'Заявки' && <Requests />}
    </div>
  )
}

export default withLayout(Team)
