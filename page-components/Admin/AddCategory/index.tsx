import clsx from 'clsx'
import { useState } from 'react'
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react'
import { Button, Input } from '@/components'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import UploadImage from '../../../public/icons/upload-image.svg'
import styles from './AddCategory.module.scss'
import Image from 'next/image'

export interface AddCategoryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setAdd?: Dispatch<SetStateAction<boolean>>
  setEdit?: Dispatch<SetStateAction<boolean>>
  type: 'add' | 'edit'
}

export const AddCategory = ({
  className,
  setAdd,
  setEdit,
  type,
}: AddCategoryProps) => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [image, setImage] = useState([])
  const maxNumber = 1

  const handleCancel = () => {
    if (type === 'add') {
      setAdd && setAdd(false)
    }
    if (type === 'edit') {
      setEdit && setEdit(false)
    }
  }

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex)
    setImage(imageList as never[])
  }

  return (
    <div className={clsx(styles.addCategory, className)}>
      <div className={styles.inputs}>
        <ImageUploading
          multiple
          value={image}
          onChange={onChangeImage}
          maxNumber={maxNumber}
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className={styles.uploadContainer}>
              <div className={styles.uploadWrapper}>
                <button
                  className={styles.uploadHere}
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <UploadImage />
                </button>
                <span className={styles.uploadText}>Загрузите изображение</span>
              </div>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <Image
                    className={styles.image}
                    src={image.dataURL as string}
                    alt=''
                    width={316}
                    height={140}
                  />
                  <div className='image-item__btn-wrapper'>
                    <button
                      className={styles.updateButton}
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </button>
                    <button
                      className={styles.removeButton}
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
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
          placeholder='Введите описание категории'
          title='Описание'
        />
      </div>
      <div className={styles.buttons}>
        <Button
          onClick={() => setAdd && setAdd(false)}
          className={styles.publish}
          variant='green'
          text={type === 'edit' ? 'Сохранить изменения' : 'Добавить категорию'}
        />
        <button onClick={handleCancel} className={styles.cancel}>
          Отменить
        </button>
      </div>
    </div>
  )
}
