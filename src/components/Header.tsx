import format from 'date-fns/format'
import enGB from 'date-fns/locale/en-GB'
import styles from '../styles/components/Header.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: enGB 
  })

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr logo"/>
      <p>The best you can listen to, always</p>
      <span>{currentDate}</span>
    </header>
  )
}