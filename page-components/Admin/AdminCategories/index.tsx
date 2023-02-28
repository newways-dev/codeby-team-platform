import Link from 'next/link'
import { categories } from '@/helpers/categories'
import { CategoryCard } from '@/page-components/Categories/CategoryCard'
import styles from './AdminCategories.module.scss'

export const AdminCategories = () => {
  return (
    <ul className={styles.adminCategories}>
      {categories.map((item, index) => (
        <li key={index}>
          <CategoryCard
            type='admin'
            className={styles.card}
            image={item.image}
            title={item.title}
            desc={item.desc}
            value={item.value}
          />
        </li>
      ))}
    </ul>
  )
}
