import { withLayout } from '@/layout/Layout'
import styles from '../../../styles/Tasks.module.scss'
import { categories } from '@/helpers/categories'
import { CategoryCard } from '@/page-components/Categories/CategoryCard'
import { TaskCard } from '@/page-components'
import Link from 'next/link'

const Tasks = () => {
  const task = categories[0]

  return (
    <div className={styles.tasks}>
      <CategoryCard
        type='user'
        image={task.image}
        title={task.title}
        desc={task.desc}
        value={task.value}
      />
      <div className={styles.taskCards}>
        <Link href='/categories/tasks/task'>
          <TaskCard
            type='user'
            status='easy'
            title='Безопасный калькулятор'
            desc='Я вроде пофиксил уязвимости, что были в прошлой версии калькулятора...'
            check={true}
          />
        </Link>
        <Link href='/categories/tasks/task'>
          <TaskCard
            type='user'
            status='medium'
            title='Безопасный калькулятор'
            desc='Я вроде пофиксил уязвимости, что были в прошлой версии калькулятора...'
            check={false}
          />
        </Link>
        <Link href='/categories/tasks/task'>
          <TaskCard
            type='user'
            status='hard'
            title='Безопасный калькулятор'
            desc='Я вроде пофиксил уязвимости, что были в прошлой версии калькулятора...'
            check={false}
          />
        </Link>
      </div>
    </div>
  )
}

export default withLayout(Tasks)
