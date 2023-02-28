import styles from './Info.module.scss'

export const Info = () => {
  return (
    <div className={styles.info}>
      <span className={styles.about}>
        Привет, я Марк Джонсон, {'Решения'}: Если вы не можете принять решение,
        ответ - нет. Если два одинаково трудных пути, выбирайте тот, который
        более болезненный в краткосрочной перспективе (избегание боли создает
        иллюзию равенства).
      </span>
      <div className={styles.contacts}>
        <p>
          <span>Полное имя:</span> Mark Johnson
        </p>
        <p>
          <span>GitHub:</span> (44) 123 1234 123
        </p>
        <p>
          <span>Telegram:</span> @simmmple
        </p>
        <p>
          <span>Email:</span> mark@simmmple,com
        </p>
      </div>
    </div>
  )
}
