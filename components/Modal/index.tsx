import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from 'react'
import { Card } from '@/page-components'
import clsx from 'clsx'
import { Input } from '../UI/Input'
import styles from './Modal.module.scss'
import { Select } from '../UI/Select'
import { Button } from '../UI/Button'
import { setModal } from '@/redux/modal/slice'
import { useDispatch } from 'react-redux'

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Modal = ({ className }: ModalProps) => {
  const types = ['Docker', 'Файлы']
  const [title, setTitle] = useState<string>('')
  const [ports, setPorts] = useState<string>('')
  const [file, setFile] = useState<string>('')
  const [type, setType] = useState<string>(types[0])
  const dispatch = useDispatch()

  let fileData = new FormData()

  const onChangeFile = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    if (!input.files?.length) {
      return
    }
    fileData.append('file', input.files[0])
  }

  const uploadFile = () => {}

  return (
    <div className={clsx(styles.modalWrapper, className)}>
      <div className={styles.modal}>
        <Card title='Добавить части задания'>
          <p className={styles.desc}>
            Укажите дополнительные параметры для задания
          </p>
          <div className={styles.fields}>
            <Input
              className={styles.title}
              type='text'
              status='default'
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              title='Заголовок'
              placeholder='Введите'
            />
            <div className={styles.type}>
              <span>Тип</span>
              <Select
                className={styles.select}
                active={type}
                setActive={setType}
                type='select'
                title='Тип'
                showTitle={false}
                variant='gray'
                options={types}
              />
            </div>
            <Input
              className={styles.port}
              status='default'
              value={ports}
              type='text'
              onChange={(e) => setPorts(e.currentTarget.value)}
              title='Порты'
              placeholder='8080:80,8022:22'
            />
            <div className={styles.heading}>
              <Input
                title='Заголовок'
                placeholder='Выберите материалы'
                status='default'
                type='file'
                value={file}
                onChange={(e) => setFile(e.currentTarget.value)}
              />
              <Button
                onClick={uploadFile}
                className={styles.upload}
                text='Загрузить'
                variant='white'
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={() => dispatch(setModal(false))}
              text='Добавить'
              variant='green'
            />
            <Button
              onClick={() => dispatch(setModal(false))}
              text='Отменить'
              variant='red'
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
