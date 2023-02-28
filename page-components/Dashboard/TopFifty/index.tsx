import { useState } from 'react'
import { topFifty } from '@/helpers/topFifrty'
import ReactPaginate from 'react-paginate'
import styles from './TopFifty.module.scss'
import clsx from 'clsx'

export const TopFifty = () => {
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10
  const items = topFifty

  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <div className={styles.topFifty}>
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
              <span>{item.id + 1}</span>
              <span>{item.login}</span>
              <span>{item.score}</span>
              <span>{item.complete}</span>
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
