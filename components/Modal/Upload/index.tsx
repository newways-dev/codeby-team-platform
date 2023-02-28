import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from 'react'
import { Card } from '@/page-components'
import { setOpenUpload } from '@/redux/modal/slice'
import { useDispatch } from 'react-redux'
import styles from './Upload.module.scss'
import { Input } from '@/components/UI/Input'
import { Select } from '@/components/UI/Select'
import { Button } from '@/components/UI/Button'

export interface UploadProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Upload = ({}: UploadProps) => {
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
    <div className={styles.upload}>
      <Card
        title='Добавить части задания'
        desc=' Укажите дополнительные параметры для задания'
      >
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
            onClick={() => dispatch(setOpenUpload(false))}
            text='Добавить'
            variant='green'
          />
          <Button
            onClick={() => dispatch(setOpenUpload(false))}
            text='Отменить'
            variant='red'
          />
        </div>
      </Card>
    </div>
  )
}
