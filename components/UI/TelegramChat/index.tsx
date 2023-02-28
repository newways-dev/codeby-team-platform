import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Telegram from '../../../public/icons/telegram.svg'
import styles from './TelegramChat.module.scss'

export interface TelegramChatProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'open' | 'closed'
}

export const TelegramChat = ({ className, variant }: TelegramChatProps) => {
  return (
    <button
      className={clsx(
        className,
        clsx(
          variant === 'open' && styles.button,
          variant === 'closed' && styles.miniButton
        )
      )}
    >
      {variant === 'open' && <p>Чат Telegram</p>}
      <Telegram />
    </button>
  )
}
