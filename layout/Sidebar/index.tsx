import clsx from 'clsx'
import Link from 'next/link'
import { routes } from './routes'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { TelegramChat } from '@/components'
import { setOpen as setOpenMenu } from '@/redux/mobileMenu/slice'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react'
import { selectMenu } from '@/redux/mobileMenu/selector'
import { selectUserRole } from '@/redux/user/selector'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '../../public/icons/close.svg'
import MiniLogo from './icons/mini-logo.svg'
import Logo from './icons/logo.svg'
import styles from './Sidebar.module.scss'

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mobile?: boolean
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [open, setOpen] = useState<boolean>(true)
  const { openMenu } = useSelector(selectMenu)
  const role = useSelector(selectUserRole)
  const dispatch = useDispatch()
  const { route } = useRouter()

  const handleOpen = () => {
    if (!openMenu) {
      setOpen(!open)
    }
  }

  useEffect(() => {
    if (openMenu) {
      setOpen(true)
    }
  }, [openMenu])

  return (
    <div className={clsx(className, styles.container)}>
      <motion.div
        initial={false}
        animate={{
          width: open && openMenu ? '100%' : open ? '256px' : '102px',
        }}
        className={styles.sidebar}
      >
        <div
          className={styles.logoContainer}
          style={!openMenu && open ? { marginLeft: '-70px' } : undefined}
          onClick={handleOpen}
        >
          {open ? (
            <div className={styles.logo}>
              <Logo />
              {openMenu && (
                <CloseIcon
                  className={styles.closeIcon}
                  onClick={() => dispatch(setOpenMenu(false))}
                />
              )}
            </div>
          ) : (
            <div className={styles.miniLogo}>
              <MiniLogo />
            </div>
          )}
        </div>
        <ul
          className={clsx(styles.routes, { [styles.mobileRoutes]: openMenu })}
        >
          <li
            onClick={() => {
              openMenu && dispatch(setOpenMenu(false))
            }}
          >
            <Link
              href={routes[0].path}
              className={clsx(
                styles.link,
                route === routes[0].path && styles.activeLink,
                {
                  [styles.activeRouteMobile]:
                    openMenu && route === routes[0].path,
                },
                { [styles.mobileSidebarRoute]: openMenu }
              )}
            >
              <div
                className={clsx(
                  route === routes[0].path && styles.activeRouteIcon
                )}
              >
                {routes[0].icon}
              </div>
              {open && <p>{routes[0].name}</p>}
              <div
                className={clsx(
                  route === routes[0].path && styles.activeBorder
                )}
              />
            </Link>
          </li>
          <li
            onClick={() => {
              openMenu && dispatch(setOpenMenu(false))
            }}
          >
            <Link
              href={routes[1].path}
              className={clsx(
                styles.link,
                routes[1].path === route && styles.activeLink,
                {
                  [styles.activeRouteMobile]:
                    openMenu && route === routes[1].path,
                },
                { [styles.mobileSidebarRoute]: openMenu }
              )}
            >
              <div
                className={clsx(
                  route === routes[1].path && styles.activeRouteIcon
                )}
              >
                {routes[1].icon}
              </div>
              {open && <p>{routes[1].name}</p>}
              <div
                className={clsx(
                  route === routes[1].path && styles.activeBorder
                )}
              />
            </Link>
          </li>
          <li
            onClick={() => {
              openMenu && dispatch(setOpenMenu(false))
            }}
          >
            <Link
              href={routes[2].path}
              className={clsx(
                styles.link,
                route === routes[2].path && styles.activeLink,
                route === '/categories/tasks' && styles.activeLink,
                route === '/categories/tasks/task' && styles.activeLink,
                {
                  [styles.activeRouteMobile]:
                    openMenu && route === routes[2].path,
                },
                {
                  [styles.activeRouteMobile]:
                    openMenu && route === '/categories/tasks',
                },
                { [styles.mobileSidebarRoute]: openMenu }
              )}
            >
              <div
                className={clsx(
                  route === routes[2].path && styles.activeRouteIcon,
                  route === '/categories/tasks' && styles.activeRouteIcon,
                  route === '/categories/tasks/task' && styles.activeRouteIcon
                )}
              >
                {routes[2].icon}
              </div>
              {open && <p>{routes[2].name}</p>}
              <div
                className={clsx(
                  route === routes[2].path && styles.activeBorder
                )}
              />
            </Link>
          </li>
          <li
            onClick={() => {
              openMenu && dispatch(setOpenMenu(false))
            }}
          >
            <Link
              href={routes[3].path}
              className={clsx(
                styles.link,
                route === routes[3].path && styles.activeLink,
                {
                  [styles.activeRouteMobile]:
                    openMenu && route === routes[3].path,
                },
                { [styles.mobileSidebarRoute]: openMenu }
              )}
            >
              <div
                className={clsx(
                  route === routes[3].path && styles.activeRouteIcon
                )}
              >
                {routes[3].icon}
              </div>
              {open && <p>{routes[3].name}</p>}
              <div
                className={clsx(
                  route === routes[3].path && styles.activeBorder
                )}
              />
            </Link>
          </li>
          <li
            onClick={() => {
              openMenu && dispatch(setOpenMenu(false))
            }}
          >
            <Link
              href={routes[4].path}
              className={clsx(
                styles.link,
                route === routes[4].path && styles.activeLink,
                {
                  [styles.activeRouteMobile]:
                    openMenu && route === routes[4].path,
                },
                { [styles.mobileSidebarRoute]: openMenu }
              )}
            >
              <div
                className={clsx(
                  route === routes[4].path && styles.activeRouteIcon
                )}
              >
                {routes[4].icon}
              </div>
              {open && <p>{routes[4].name}</p>}
              <div
                className={clsx(
                  route === routes[4].path && styles.activeBorder
                )}
              />
            </Link>
          </li>
          <div
            className={clsx(styles.settings, {
              [styles.mobileSettings]: openMenu,
            })}
          >
            {role === 'admin' && (
              <li
                onClick={() => {
                  openMenu && dispatch(setOpenMenu(false))
                }}
              >
                <Link
                  href={routes[5].path}
                  className={clsx(
                    styles.link,
                    route === routes[5].path && styles.activeLink,
                    {
                      [styles.activeRouteMobile]:
                        openMenu && route === routes[5].path,
                    },
                    { [styles.mobileSidebarRoute]: openMenu }
                  )}
                >
                  <div
                    className={clsx(
                      route === routes[5].path && styles.activeRouteIcon
                    )}
                  >
                    {routes[5].icon}
                  </div>
                  {open && <p>{routes[5].name}</p>}
                  <div
                    className={clsx(
                      route === routes[5].path && styles.activeBorder
                    )}
                  />
                </Link>
              </li>
            )}
            <li
              onClick={() => {
                openMenu && dispatch(setOpenMenu(false))
              }}
            >
              <Link
                href={routes[6].path}
                className={clsx(
                  styles.link,
                  route === routes[6].path && styles.activeLink,
                  {
                    [styles.activeRouteMobile]:
                      openMenu && route === routes[6].path,
                  },
                  { [styles.mobileSidebarRoute]: openMenu }
                )}
              >
                <div
                  className={clsx(
                    route === routes[6].path && styles.activeRouteIcon
                  )}
                >
                  {routes[6].icon}
                </div>
                {open && <p>{routes[6].name}</p>}
                <div
                  className={clsx(
                    route === routes[6].path && styles.activeBorder
                  )}
                />
              </Link>
            </li>
            <li
              onClick={() => {
                openMenu && dispatch(setOpenMenu(false))
              }}
              className={clsx({ [styles.mobileSidebarRoute]: openMenu })}
            >
              <Link href={routes[7].path} className={clsx(styles.link)}>
                <div>{routes[7].icon}</div>
                {open && <p>{routes[7].name}</p>}
              </Link>
            </li>
          </div>
        </ul>
        <TelegramChat
          variant={open ? 'open' : 'closed'}
          className={clsx(styles.telegram, { [styles.mobileButton]: openMenu })}
        />
      </motion.div>
    </div>
  )
}
