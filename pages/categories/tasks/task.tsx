import { withLayout } from '@/layout/Layout'
import { categories } from '@/helpers/categories'
import { CategoryCard } from '@/page-components/Categories/CategoryCard'
import { TaskAddition, TaskDescription } from '@/page-components'
import styles from '../../../styles/Tasks.module.scss'

const Task = () => {
  const task = categories[0]
  const files = ['File 1', 'File 2', 'File 3']
  const help = [
    'Вы не любите кошек? Да вы просто не умеете их готовить!',
    'Вы любите кошек? Да вы просто умеете их готовить!',
  ]

  return (
    <div className={styles.task}>
      <CategoryCard
        type='user'
        image={task.image}
        title={task.title}
        desc={task.desc}
        value={task.value}
      />
      <div className={styles.cards}>
        <TaskDescription
          className={styles.desc}
          title='Безопасный калькулятор'
          desc='Я вроде пофиксил уязвимости, что были в прошлой версии калькулятора...'
          check
        />
        <TaskAddition
          className={styles.addition}
          timeLeft='05:00'
          files={files}
          help={help}
        />
      </div>
    </div>
  )
}

export default withLayout(Task)
