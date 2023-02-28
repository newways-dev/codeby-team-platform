import { withLayout } from '@/layout/Layout'
import { CategoryCard } from '@/page-components/Categories/CategoryCard'
import { categories } from '@/helpers/categories'
import styles from '../../styles/Categories.module.scss'
import Link from 'next/link'

const Categories = () => {
  return (
    <ul className={styles.categories}>
      {categories.map((item, index) => (
        <li key={index}>
          <Link href='/categories/tasks'>
            <CategoryCard
              type='user'
              image={item.image}
              title={item.title}
              desc={item.desc}
              value={item.value}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default withLayout(Categories)
