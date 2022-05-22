import AnimeCard from './AnimeCard'
import styles from './AnimeList.module.css'

const AnimeList = ({ animes }) => {
  return (
    <>
      <div className={styles.gridWrapper}>
        <section className={styles.animeList}>
              {animes.map(anime => <AnimeCard key={anime.slug} title={anime.title} link={`/anime/${anime.slug}`} img={`http://89.44.194.174:5000/media/posters/${anime.poster}`} />)}
              {/* <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" />
              <AnimeCard title="Госпожа Кагуя: в" link="#" img="https://desu.shikimori.one/system/animes/preview/43608.jpg?1652398146" /> */}
        </section>
      </div>
    </> 
  )
}

export default AnimeList