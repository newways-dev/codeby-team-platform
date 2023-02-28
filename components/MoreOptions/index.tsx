import { setModal } from '@/redux/modal/slice'
import clsx from 'clsx'
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react'
import { useDispatch } from 'react-redux'
import styles from './MoreOptions.module.scss'

export interface MoreOptionsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tasks: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const MoreOptions = ({
  className,
  tasks,
  setOpen,
}: MoreOptionsProps) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className={clsx(styles.moreOptions, className)}>
        <span onClick={() => setOpen(false)}>Скрыть</span>
        {tasks && (
          <span
            onClick={() => {
              dispatch(setModal(true))
              setOpen(false)
            }}
          >
            Добавить части задания
          </span>
        )}
        <span onClick={() => setOpen(false)}>Редактировать</span>
        <span onClick={() => setOpen(false)}>Удалить</span>
      </div>
    </>
  )
}
