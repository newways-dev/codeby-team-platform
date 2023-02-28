import { FC, ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import styles from './Layout.module.scss'
import { useSelector } from 'react-redux'
import { selectModal } from '@/redux/modal/selector'
import { Modal } from '@/components'

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { openModal } = useSelector(selectModal)

  return (
    <div className={styles.layout}>
      {openModal && <Modal />}
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
