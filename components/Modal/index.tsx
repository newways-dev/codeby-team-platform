import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Upload } from './Upload'
import { CreateTeam } from './CreateTeam'
import { AddIntoTeam } from './AddIntoTeam'
import { JoinTeam } from './JoinTeam'
import styles from './Modal.module.scss'

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'upload' | 'createTeam' | 'joinTeam' | 'addIntoTeam'
}

export const Modal = ({ className, type }: ModalProps) => {
  return (
    <div className={clsx(styles.modalWrapper, className)}>
      {type === 'upload' && <Upload />}
      {type === 'createTeam' && <CreateTeam />}
      {type === 'joinTeam' && <JoinTeam />}
      {type === 'addIntoTeam' && <AddIntoTeam />}
    </div>
  )
}
