import clsx from 'clsx'
import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import styles from './Profile.module.scss'

import Arrow from '../../public/icons/ArrowDown.svg'
import avatar from '../../public/images/avatar.jpg'
import Link from 'next/link'

export interface ProfileProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Profile = ({ className }: ProfileProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.profile}>
      <div className={styles.wrapper} onClick={() => setOpen(!open)}>
        <Image src={avatar} alt='' width={40} height={40} />
        <div className={clsx({ [styles.arrowOpen]: open })}>
          <Arrow />
        </div>
      </div>
      {open && (
        <ul className={styles.dropdown}>
          <Link onClick={() => setOpen(false)} href='/profile'>
            <li>Профиль</li>
          </Link>
          <Link onClick={() => setOpen(false)} href='/settings'>
            <li>Редактировать профиль</li>
          </Link>
          <Link onClick={() => setOpen(false)} href='/'>
            <li>Выйти</li>
          </Link>
        </ul>
      )}
    </div>
  )
}
