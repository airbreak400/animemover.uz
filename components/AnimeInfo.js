import styles from './AnimeInfo.module.css'

const AnimeInfo = ({ anime }) => {
  return (
    <div className={styles.animeInfoGrid}>
        <img alt={anime.title} className={styles.animeInfoImg} src={`http://localhost:5000/media/posters/${anime.poster}`} />
        <table className={styles.animeInfoTable}>
            <tbody>
            <tr>
                <td>Title</td>
                <td>{anime.title}</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>{anime.date}</td>
            </tr>
            <tr>
                <td>Genres</td>
                <td>{anime.genres.join(', ')}</td>
            </tr>
            <tr>
                <td colSpan="2">{anime.description}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AnimeInfo