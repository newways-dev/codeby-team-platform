import { withLayout } from '@/layout/Layout'
import { Settings as SettingsCard } from '@/page-components'
import styles from '../styles/Settings.module.scss'

const Settings = () => {
  return (
    <div className={styles.settings}>
      <SettingsCard />
    </div>
  )
}

export default withLayout(Settings)
