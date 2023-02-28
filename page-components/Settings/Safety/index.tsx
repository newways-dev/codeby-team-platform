import { Input } from '@/components'
import { useState } from 'react'
import styles from './Safety.module.scss'

export const Safety = () => {
  const [email, setEmail] = useState<string>('')
  const [newEmail, setNewEmail] = useState<string>('')
  const [confirmEmail, setConfirmEmail] = useState<string>('')

  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  return (
    <div className={styles.safety}>
      <div className={styles.inputs}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          status={
            email === ''
              ? 'default'
              : email.length < 10
              ? 'false'
              : email.length > 4
              ? 'true'
              : 'default'
          }
          desc='*Ваш email является логином для входа.'
          placeholder='mark@simmmple.com'
          type='email'
          title='Email'
          className={styles.email}
        />
        <div>
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            status={
              password === ''
                ? 'default'
                : password.length < 5
                ? 'false'
                : password.length > 4
                ? 'true'
                : 'default'
            }
            desc='*Если вы забыли пароль, новый будет отправлен на ваш email.'
            type='password'
            title='Текущий пароль'
            className={styles.password}
          />
          <div className={styles.forgotPassword}>
            <p>Забыли пароль?</p> &nbsp; <span>Восстановить</span>
          </div>
        </div>
        <Input
          value={newEmail}
          onChange={(e) => setNewEmail(e.currentTarget.value)}
          status={
            newEmail === ''
              ? 'default'
              : newEmail.length < 10
              ? 'false'
              : newEmail.length > 4
              ? 'true'
              : 'default'
          }
          className={styles.newEmail}
          title='Новый email'
          type='email'
        />
        <Input
          value={newPassword}
          onChange={(e) => setNewPassword(e.currentTarget.value)}
          status={
            newPassword === ''
              ? 'default'
              : newPassword.length < 5
              ? 'false'
              : newPassword.length > 4
              ? 'true'
              : 'default'
          }
          className={styles.newPassword}
          title='Новый пароль'
          type='password'
        />
        <Input
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.currentTarget.value)}
          status={
            confirmEmail === ''
              ? 'default'
              : confirmEmail.length < 10
              ? 'false'
              : confirmEmail.length > 4 && confirmEmail === newEmail
              ? 'true'
              : 'default'
          }
          className={styles.confirmEmail}
          title='Подтвердите email'
          type='email'
        />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          status={
            confirmPassword === ''
              ? 'default'
              : confirmPassword !== newPassword
              ? 'false'
              : confirmPassword === newPassword
              ? 'true'
              : 'default'
          }
          className={styles.confirmPassword}
          title='Подтвердите пароль'
          type='password'
        />
      </div>
    </div>
  )
}
