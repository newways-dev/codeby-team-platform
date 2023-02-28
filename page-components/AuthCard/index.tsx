import { Button, Input } from '@/components'
import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import TgIcon from '../../public/icons/telegram.svg'
import styles from './AuthCard.module.scss'

export interface AuthCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'login' | 'register' | 'password'
}

export const AuthCard = ({ type }: AuthCardProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')

  return (
    <div className={styles.authCard}>
      <span className={styles.title}>
        {type === 'login' && 'Войти с помощью'}
      </span>
      <span className={styles.title}>
        {type === 'register' && 'Зарегистрироваться с помощью'}
      </span>
      <span className={styles.title}>
        {type === 'password' && 'Выполните вход в аккаунт'}
      </span>
      <p className={styles.desc}>
        {type === 'password' && (
          <>
            <span>Проверьте вашу почту.</span>
            <span>Мы отправили вам новый пароль.</span>
            <span>Введите его для входа в аккаунт.</span>
          </>
        )}
      </p>
      {type === 'login' && (
        <>
          <div className={styles.tegegram}>
            <TgIcon />
          </div>
          <span className={styles.or}>ИЛИ</span>
        </>
      )}
      {type === 'register' && (
        <>
          <div className={styles.tegegram}>
            <TgIcon />
          </div>
          <span className={styles.or}>ИЛИ</span>
        </>
      )}
      {type === 'register' && (
        <div className={styles.inputs}>
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
            type='text'
            title='Никнейм'
            placeholder='Введите ваш никнейм'
          />
          <Input
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            status={
              email === ''
                ? 'default'
                : email.length < 5
                ? 'false'
                : email.length > 4
                ? 'true'
                : 'default'
            }
            type='text'
            title='Email'
            placeholder='Введите ваш Email'
          />
          <Input
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            status={
              password === ''
                ? 'default'
                : password.length < 5
                ? 'false'
                : password.length > 4
                ? 'true'
                : 'default'
            }
            type='text'
            title='Пароль'
            placeholder='Введите ваш пароль'
          />
          <Button text='Зарегистрироваться' variant='green' />
          <p>
            У вас уже есть аккаунт? <span>Войти</span>
          </p>
        </div>
      )}
      {type === 'login' && (
        <div className={styles.inputs}>
          <Input
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            status={
              email === ''
                ? 'default'
                : email.length < 5
                ? 'false'
                : email.length > 4
                ? 'true'
                : 'default'
            }
            type='text'
            title='Email'
            placeholder='Введите ваш Email'
          />
          <Input
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            status={
              password === ''
                ? 'default'
                : password.length < 5
                ? 'false'
                : password.length > 4
                ? 'true'
                : 'default'
            }
            type='text'
            title='Пароль'
            placeholder='Введите ваш пароль'
          />
          <p>
            Забыли пароль? <span>Восстановить</span>
          </p>
          <Button text='Войти' variant='green' />
          <p>
            У вас еще нет аккаунта? <span>Зарегистрироваться</span>
          </p>
        </div>
      )}
      {type === 'password' && (
        <div className={styles.inputs}>
          <Input
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            status={
              email === ''
                ? 'default'
                : email.length < 5
                ? 'false'
                : email.length > 4
                ? 'true'
                : 'default'
            }
            type='text'
            title='Email'
            placeholder='Введите ваш Email'
          />
          <Input
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            status={
              password === ''
                ? 'default'
                : password.length < 5
                ? 'false'
                : password.length > 4
                ? 'true'
                : 'default'
            }
            type='text'
            title='Пароль'
            placeholder='Введите полученный пароль'
          />
          <Button text='Войти' variant='green' />
        </div>
      )}
    </div>
  )
}
