import clsx from 'clsx'
import { useState } from 'react'
import { Edit } from './Edit'
import { SettingsMobilePage, SettingsPage } from '@/types/settings'
import styles from './Settings.module.scss'
import { Button } from '@/components'
import Arrow from '../../public/icons/RightArrow.svg'
import useWindowSize from '@/hooks/useWindowSize'
import { Safety } from './Safety'

export const Settings = () => {
  const [page, setPage] = useState<SettingsPage>('edit')
  const [mobilePage, setMobilePage] = useState<SettingsMobilePage>('none')

  const windowSize = useWindowSize()

  if (!windowSize) {
    return null
  }

  return (
    <div className={styles.settings}>
      <div className={styles.links}>
        <ul>
          <li
            className={clsx({ [styles.active]: page === 'edit' })}
            onClick={() => setPage('edit')}
          >
            Редактировать профиль
          </li>
          <li
            className={clsx({ [styles.active]: page === 'safety' })}
            onClick={() => setPage('safety')}
          >
            Безопасность
          </li>
        </ul>
      </div>
      {mobilePage === 'none' && (
        <div className={styles.mobileLinks}>
          <ul>
            <li
              className={clsx({ [styles.active]: page === 'edit' })}
              onClick={() => setMobilePage('mobileEdit')}
            >
              <span>Редактировать профиль</span>
              <Arrow />
            </li>
            <li
              className={clsx({ [styles.active]: page === 'safety' })}
              onClick={() => setMobilePage('mobileSafety')}
            >
              <span>Безопасность</span>
              <Arrow />
            </li>
            <li
              className={clsx({ [styles.active]: page === 'notifications' })}
              onClick={() => setMobilePage('mobileNotifications')}
            >
              <span>Уведомления</span>
              <Arrow />
            </li>
          </ul>
        </div>
      )}
      {page === 'edit' && windowSize > 720 && <Edit />}
      {page === 'safety' && windowSize > 720 && <Safety />}
      {mobilePage === 'mobileEdit' && <Edit />}
      {mobilePage === 'mobileSafety' && <Safety />}
      {windowSize < 720 && mobilePage === 'none' ? null : (
        <div className={styles.buttons}>
          <Button
            onClick={() => setMobilePage('none')}
            className={styles.save}
            text='Сохранить изменения'
            variant='green'
          />
          <button className={styles.delete}>Удалить аккаунт</button>
        </div>
      )}
    </div>
  )
}
