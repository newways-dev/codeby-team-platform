import clsx from 'clsx'
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react'
import { useState } from 'react'
import { Button, IconButton, Input } from '@/components'
import DeleteTag from '../../../public/icons/delete-tag.svg'
import styles from './AddNews.module.scss'

export interface AddNewsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setAdd?: Dispatch<SetStateAction<boolean>>
  setEdit?: Dispatch<SetStateAction<boolean>>
  type: 'add' | 'edit'
}

export const AddNews = ({ className, setAdd, setEdit, type }: AddNewsProps) => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [newTag, setNewTag] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])

  const handleAddTag = () => {
    if (newTag !== '') {
      setTags(tags.concat(newTag))
    }
    setNewTag('')
  }

  const handleCancel = () => {
    if (type === 'add') {
      setAdd && setAdd(false)
    }
    if (type === 'edit') {
      setEdit && setEdit(false)
    }
  }

  return (
    <div className={clsx(styles.addNews, className)}>
      <div className={styles.tags}>
        {tags &&
          tags.map((tag, index) => (
            <div className={styles.tag} key={index}>
              {tag}
            </div>
          ))}
        <div className={styles.newTag}>
          <input
            placeholder='Введите тэг'
            value={newTag}
            type='text'
            onChange={(e) => setNewTag(e.target.value)}
          />
          <DeleteTag />
        </div>
        <IconButton
          className={styles.plus}
          onClick={handleAddTag}
          type='plus'
        />
      </div>
      <div className={styles.inputs}>
        <Input
          className={styles.title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          status='default'
          value={title}
          type='text'
          placeholder='Введите заголовок'
          title='Заголовок'
        />
        <Input
          className={styles.desc}
          onChange={(e) => setDesc(e.currentTarget.value)}
          value={desc}
          status='default'
          type='textarea'
          placeholder='Введите описание новости'
          title='Описание'
        />
      </div>
      <div className={styles.buttons}>
        <Button
          onClick={() => setAdd && setAdd(false)}
          className={styles.publish}
          variant='green'
          text={type === 'edit' ? 'Сохранить изменения' : 'Опубликовать'}
        />
        <button onClick={handleCancel} className={styles.cancel}>
          Отменить
        </button>
      </div>
    </div>
  )
}
