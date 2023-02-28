import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { NextResponse } from 'next/server'
import { withLayout } from '@/layout/Layout'
import styles from '../styles/Admin.module.scss'
import { IconButton, Select } from '@/components'
import {
  AddCategory,
  AddNews,
  AddTask,
  AdminCategories,
  AdminInfo,
  AdminNews,
  AdminTasks,
  Card,
  UsersList,
} from '@/page-components'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUserRole } from '@/redux/user/selector'

const Admin = () => {
  const [add, setAdd] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [page, setPage] = useState<string>('Инфо')
  const [showButtons, setShowButtons] = useState<boolean>(false)
  const links = [
    'Инфо',
    'Cписок юзеров',
    'Новости',
    'Категории',
    'Задания',
    'Архив',
  ]

  const router = useRouter()
  const role = useSelector(selectUserRole)

  useEffect(() => {
    if (role === 'user') {
      router.push('/')
    }
  }, [role, router])

  useEffect(() => {
    if (page === 'Новости') {
      setShowButtons(true)
    } else if (page === 'Категории') {
      setShowButtons(true)
    } else if (page === 'Задания') {
      setShowButtons(true)
    } else {
      setShowButtons(false)
    }
  }, [page])

  return (
    <div className={styles.admin}>
      <div className={styles.mobileToolbar}>
        <Select
          type='select'
          active={page}
          setActive={setPage}
          variant='black'
          showTitle={false}
          title={page}
          options={links}
        />
        {showButtons && (
          <div className={styles.mobileButtons}>
            <IconButton
              onClick={() => {
                setAdd(!add)
                setEdit(false)
              }}
              type='add'
            />
            <IconButton
              onClick={() => {
                setEdit(!edit)
                setAdd(false)
              }}
              type='edit'
            />
            <IconButton type='delete' />
          </div>
        )}
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
            className={clsx({ [styles.active]: page === 'Cписок юзеров' })}
            onClick={() => setPage('Cписок юзеров')}
          >
            Cписок юзеров
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Новости' })}
            onClick={() => setPage('Новости')}
          >
            Новости
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Категории' })}
            onClick={() => setPage('Категории')}
          >
            Категории
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Задания' })}
            onClick={() => setPage('Задания')}
          >
            Задания
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Архив' })}
            onClick={() => setPage('Архив')}
          >
            Архив
          </li>
        </ul>
        {showButtons && (
          <div className={styles.buttons}>
            <IconButton
              onClick={() => {
                setAdd(!add)
                setEdit(false)
              }}
              type='add'
            />
            <IconButton
              onClick={() => {
                setEdit(!edit)
                setAdd(false)
              }}
              type='edit'
            />
            <IconButton type='delete' />
          </div>
        )}
      </div>
      {page === 'Новости' && add && <AddNews type='add' setAdd={setAdd} />}
      {page === 'Новости' && edit && <AddNews type='edit' setEdit={setEdit} />}
      {page === 'Категории' && add && (
        <AddCategory type='add' setAdd={setAdd} />
      )}
      {page === 'Категории' && edit && (
        <AddCategory type='edit' setEdit={setEdit} />
      )}
      {page === 'Задания' && add && <AddTask setAdd={setAdd} type='add' />}
      {page === 'Задания' && edit && <AddTask setEdit={setEdit} type='edit' />}
      {page === 'Инфо' && <AdminInfo />}
      {page === 'Cписок юзеров' && (
        <Card title='Список юзеров'>
          <UsersList />
        </Card>
      )}
      {page === 'Новости' && <AdminNews />}
      {page === 'Категории' && <AdminCategories />}
      {page === 'Задания' && <AdminTasks />}
    </div>
  )
}

export default withLayout(Admin)
