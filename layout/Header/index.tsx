import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import {
  Profile,
  MobileMenu,
  MobileSearch,
  Notification,
  Search,
} from '@/components'
import Menu from '../../public/icons/menu.svg'
import BellCircle from '../../public/icons/bell-circle.svg'
import styles from './Header.module.scss'
import { selectMenu } from '@/redux/mobileMenu/selector'
import Telegram from '../../public/icons/telegram.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '@/redux/mobileMenu/slice'
import { useRouter } from 'next/router'
import Link from 'next/link'

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className }: HeaderProps) => {
  const { openMenu } = useSelector(selectMenu)
  const dispatch = useDispatch()
  const { route } = useRouter()

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.wrapper}>
        <span className={styles.title}>
          {route === '/' && 'Скорборд'}
          {route === '/news' && 'Новости'}
          {route === '/categories' && 'Категории'}
          {route === '/profile' && 'Профиль'}
          {route === '/settings' && 'Настройки'}
          {route === '/admin' && 'Панель администратора'}
          {route === '/team' && 'Команда'}
          {route === '/notifications' && 'Уведомления'}
        </span>
        <p></p>
        <Menu
          className={styles.menu}
          onClick={() => dispatch(setOpen(!openMenu))}
        />
        {openMenu && <MobileMenu className={styles.mobileMenu} />}
        <div className={styles.options}>
          <div className={styles.rightWrapper}>
            <Link href='/notifications'>
              <div className={styles.notification}>
                <Notification />
                <BellCircle className={styles.circle} />
              </div>
            </Link>
            <Profile className={styles.profile} />
          </div>
        </div>
      </div>
    </header>
  )
}
