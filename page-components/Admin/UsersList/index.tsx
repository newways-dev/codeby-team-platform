import clsx from 'clsx'
import { useState } from 'react'
import { users } from '@/helpers/users'
import DeleteIcon from '../../../public/icons/delete.svg'
import ReactPaginate from 'react-paginate'
import styles from './UsersList.module.scss'

export const UsersList = () => {
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10
  const items = users

  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <div className={styles.usersList}>
      <div className={styles.top}>
        <span>№</span>
        <span>Логин</span>
        <span>Баллы</span>
        <span>Решено заданий</span>
      </div>
      <ul className={styles.list}>
        {currentItems &&
          currentItems.map((item, index) => (
            <li
              className={clsx(styles.item, { [styles.oddUser]: item.id % 2 })}
              key={index}
            >
              <span>{item.id}</span>
              <span>{item.login}</span>
              <span>{item.status}</span>
              <span>{item.points}</span>
              <span>{item.complete}</span>
              <DeleteIcon />
            </li>
          ))}
      </ul>
      <div className={styles.pagination}>
        <ReactPaginate
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='<'
          renderOnZeroPageCount={undefined}
          disableInitialCallback={true}
          containerClassName='paginationButtons'
          previousLinkClassName='prevButton'
          nextLinkClassName='nextButton'
          disabledClassName='disabledButton'
          activeClassName='activeButton'
        />
      </div>
    </div>
  )
}
