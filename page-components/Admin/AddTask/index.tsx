import clsx from 'clsx'
import { useState } from 'react'
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react'
import { Button, Input, RadioInput, Select } from '@/components'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import UploadImage from '../../../public/icons/upload-image.svg'
import Add from '../../../public/icons/plus.svg'
import styles from './AddTask.module.scss'
import Image from 'next/image'

export interface AddTaskProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setAdd?: Dispatch<SetStateAction<boolean>>
  setEdit?: Dispatch<SetStateAction<boolean>>
  type: 'add' | 'edit'
}

const categories = [
  'Администрирование',
  'Криптография',
  'Форензика',
  'Развлечения',
  'Реверс-инжиниринг ',
  'Стеганография',
  'Веб',
  'PWN',
  'Квест',
]

export const AddTask = ({ className, setAdd, setEdit, type }: AddTaskProps) => {
  const [image, setImage] = useState([])
  const [visibility, setVisibility] = useState<boolean>(false)
  const [category, setCategory] = useState<string>('Выберите категорию')
  const [points, setPoints] = useState<string>('')
  const [flag, setFlag] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [help, setHelp] = useState<string>('')
  const [helps, setHelps] = useState<string[]>([])
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

  const handleAddHelp = () => {
    if (help !== '') {
      setHelps(helps.concat(help))
    }
    setHelp('')
  }

  return (
    <div className={clsx(styles.addTask, className)}>
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
                <span className={styles.uploadText}>Загрузите иконку</span>
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
        <span className={styles.visibility}>Видимость</span>
        <div className={styles.radioContainer}>
          <RadioInput
            checked={visibility === true}
            text='Видна'
            onChange={() => setVisibility(!visibility)}
          />
          <RadioInput
            checked={visibility === false}
            text='Не видна'
            onChange={() => setVisibility(!visibility)}
          />
        </div>
        <div className={styles.fields}>
          <div className={styles.left}>
            <div className={styles.category}>
              <span className={styles.categoryTitle}>Категория</span>
              <Select
                className={styles.select}
                active={category}
                setActive={setCategory}
                showTitle={false}
                placeholder='Выберите категорию'
                type='select'
                variant='gray'
                options={categories}
                title='Категория'
              />
            </div>
            <Input
              className={styles.name}
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
              status='default'
              type='text'
              placeholder='Введите название'
              title='Название'
            />
            <Input
              className={styles.desc}
              onChange={(e) => setDesc(e.currentTarget.value)}
              value={desc}
              status='default'
              type='textarea'
              placeholder='Введите описание'
              title='Описание'
            />
          </div>
          <div className={styles.right}>
            <Input
              className={styles.points}
              onChange={(e) => setPoints(e.currentTarget.value)}
              value={points}
              status='default'
              type='text'
              placeholder='Введите'
              title='Очки за выполнение'
            />
            <Input
              className={styles.flag}
              onChange={(e) => setFlag(e.currentTarget.value)}
              value={flag}
              status='default'
              type='text'
              placeholder='Введите'
              title='Верный флаг'
            />
            <div className={styles.helpOne}>
              <Input
                onChange={(e) => setHelp(e.currentTarget.value)}
                value={help}
                status='default'
                type='text'
                placeholder='Введите'
                title='Подсказка'
              />
              {helps.length > 0 &&
                helps.map((item, index) => (
                  <Input
                    type='text'
                    status='default'
                    onChange={() => {}}
                    key={index}
                    value={item}
                  />
                ))}
              <button onClick={() => handleAddHelp()} className={styles.add}>
                <Add /> Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          onClick={() => setAdd && setAdd(false)}
          className={styles.publish}
          variant='green'
          text={type === 'edit' ? 'Сохранить изменения' : 'Создать задание'}
        />
        <button onClick={handleCancel} className={styles.cancel}>
          Отменить
        </button>
      </div>
    </div>
  )
}
