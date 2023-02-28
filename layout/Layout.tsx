import { FC, ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import styles from './Layout.module.scss'
import { useSelector } from 'react-redux'
import { Modal } from '@/components'
import {
  selectAddIntoTeam,
  selectCreateTeam,
  selectJoinTeam,
  selectOpenUpload,
} from '@/redux/modal/selector'

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const addIntoTeam = useSelector(selectAddIntoTeam)
  const openUpload = useSelector(selectOpenUpload)
  const createTeam = useSelector(selectCreateTeam)
  const joinTeam = useSelector(selectJoinTeam)

  return (
    <div className={styles.layout}>
      {openUpload && <Modal type='upload' />}
      {createTeam && <Modal type='createTeam' />}
      {joinTeam && <Modal type='joinTeam' />}
      {addIntoTeam && <Modal type='addIntoTeam' />}
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
