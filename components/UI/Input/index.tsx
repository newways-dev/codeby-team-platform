import clsx from 'clsx'
import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from 'react'
import styles from './Input.module.scss'

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string
  placeholder?: string
  type: 'text' | 'textarea' | 'email' | 'password' | 'file'
  desc?: string
  status: 'default' | 'true' | 'false'
  value: string | number
  onChange: (e: FormEvent<HTMLInputElement>) => void
}

export const Input = ({
  onChange,
  status,
  className,
  title,
  placeholder,
  type,
  desc,
  value,
}: InputProps) => {
  return (
    <div className={clsx(className, styles.inputContainer)}>
      <span className={styles.title}>{title}</span>
      {desc && <span className={styles.desc}>{desc}</span>}
      {type !== 'textarea' && (
        <input
          onChange={onChange}
          value={value}
          className={clsx(
            { [styles.default]: status === 'default' },
            { [styles.true]: status === 'true' },
            { [styles.false]: status === 'false' }
          )}
          type={type}
          placeholder={placeholder}
        />
      )}
      {type === 'textarea' && <textarea placeholder={placeholder} />}
    </div>
  )
}
