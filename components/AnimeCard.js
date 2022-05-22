import styles from './AnimeCard.module.css';
import Link from 'next/link';
const AnimeCard = ({ title, link, img }) => {
  return (
    <div className={styles.animeCard}>
      <img src={img} alt={title} style={{ width: '100%', height: 'auto' }} />
      <Link href={link}><a>{title}</a></Link>
    </div>
  )
}

export default AnimeCard