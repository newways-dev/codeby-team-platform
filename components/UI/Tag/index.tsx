import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { Tags } from '@/types/tags'
import styles from './Tag.module.scss'

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type: Tags
  active: boolean
}

export const Tag = ({ className, type, active }: TagProps) => {
  const [show, setShow] = useState<boolean>(active)

  switch (type) {
    case Tags.Administration:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.admin]: show }, styles.tag)}
        >
          <p>Администрирование</p>
        </div>
      )
    case Tags.Crypto:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.crypto]: show }, styles.tag)}
        >
          <p>Криптография</p>
        </div>
      )
    case Tags.Forensics:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.forensics]: show }, styles.tag)}
        >
          <p>Форензика</p>
        </div>
      )
    case Tags.Entertainment:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(
            className,
            { [styles.entertainment]: show },
            styles.tag
          )}
        >
          <p>Развлечения</p>
        </div>
      )
    case Tags.ReverseEngineering:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.reverse]: show }, styles.tag)}
        >
          <p>Реверс-инжиниринг </p>
        </div>
      )
    case Tags.Steganography:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.steno]: show }, styles.tag)}
        >
          <p>Стеганография</p>
        </div>
      )
    case Tags.Web:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.web]: show }, styles.tag)}
        >
          <p>Веб</p>
        </div>
      )
    case Tags.PWN:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.pwn]: show }, styles.tag)}
        >
          <p>PWN</p>
        </div>
      )
    case Tags.Quest:
      return (
        <div
          onClick={() => setShow(!show)}
          className={clsx(className, { [styles.quest]: show }, styles.tag)}
        >
          <p>Квест</p>
        </div>
      )

    default:
      return <></>
  }
}
