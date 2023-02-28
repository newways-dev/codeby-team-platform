import { useState } from 'react'
import styles from './Edit.module.scss'
import { Input } from '@/components'

import Upload from '../../../public/icons/upload.svg'

export const Edit = () => {
  const [name, setName] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [github, setGithub] = useState<string>('')
  const [about, setAbout] = useState<string>('')

  return (
    <>
      <div className={styles.edit}>
        <span>Изображение профиля</span>
        <div>
          <Upload />
          <span>Загрузите иконку</span>
        </div>
      </div>
      <div className={styles.inputs}>
        <Input
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
          status={
            name === ''
              ? 'default'
              : name.length < 5
              ? 'false'
              : name.length > 4
              ? 'true'
              : 'default'
          }
          className={styles.name}
          title='Полное имя'
          placeholder='Пожалуйста, введите свое полное имя'
          type='text'
        />
        <Input
          onChange={(e) => setTelegram(e.currentTarget.value)}
          value={telegram}
          status={
            telegram === ''
              ? 'default'
              : telegram.length < 5
              ? 'false'
              : telegram.length > 4
              ? 'true'
              : 'default'
          }
          className={styles.telegram}
          title='Telegram:'
          placeholder='Вставьте ссылку'
          type='text'
        />
        <Input
          onChange={(e) => setNickname(e.currentTarget.value)}
          value={nickname}
          status={
            nickname === ''
              ? 'default'
              : nickname.length < 5
              ? 'false'
              : nickname.length > 4
              ? 'true'
              : 'default'
          }
          className={styles.nickname}
          title='Никнейм'
          placeholder='Пожалуйста, введите свой никнейм'
          type='text'
        />
        <Input
          onChange={(e) => setGithub(e.currentTarget.value)}
          value={github}
          status={
            github === ''
              ? 'default'
              : github.length < 5
              ? 'false'
              : github.length > 4
              ? 'true'
              : 'default'
          }
          className={styles.github}
          title='GitHub:'
          placeholder='Вставьте ссылку'
          type='text'
        />
        <Input
          onChange={(e) => setAbout(e.currentTarget.value)}
          value={about}
          status='default'
          className={styles.about}
          title='Обо мне'
          placeholder='Напишите здесь свою биографию, например, ваши хобби, интересы и т.д.'
          type='textarea'
        />
      </div>
    </>
  )
}
