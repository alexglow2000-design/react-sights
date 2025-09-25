import { type FC } from 'react'
import styles from './Pages.module.css'

interface IPagesProps {
  count: number,
  limit: number,
  currentPage: number,
  changePage: (page: number) => void
}

const Pages: FC<IPagesProps> = ({ count, limit, changePage, currentPage }) => {

  const pageCount = Math.ceil(count / limit)
  const pages = []

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <div className={styles.linkContainer}>
      {currentPage !== 1 ?
      <div className={styles.forPoiner}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" onClick={() => changePage(currentPage - 1)}>
          <path d="M19 10L1 10M1 10L9.5 1.5M1 10L9.5 18.5" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      :
      <div className={styles.forPoiner}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M19 10L1 10M1 10L9.5 1.5M1 10L9.5 18.5" stroke="#eeeeeea8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      }
        {pages.map((p) => (
          <p key={p} className={p === currentPage ? styles.linkItem : styles.linkItemActive} onClick={() => changePage(p)}>{p}</p>
        ))}
      {currentPage !== count ?
      <div className={styles.forPoiner}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" onClick={() => changePage(currentPage + 1)}>
          <path d="M1 10L19 10M19 10L10.5 18.5M19 10L10.5 1.5" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      :
      <div className={styles.forPoiner}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M1 10L19 10M19 10L10.5 18.5M19 10L10.5 1.5" stroke="#eeeeeea8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      }
    </div>
  )
}

export default Pages
