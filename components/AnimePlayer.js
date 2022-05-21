import { useState } from 'react'
import styles from './AnimePlayer.module.css'

const AnimePlayer = ({series}) => {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const handleChangeEpisode = (e) => {
    const clickedEpisode = e.target.innerText.split('-')[1].trim();
    setCurrentEpisode(clickedEpisode - 1);
    
  }
  return (
    <div className={styles.AnimePlayerGrid}>
        <div className={styles.AnimePlayer} dangerouslySetInnerHTML={{__html: series[currentEpisode]}}></div>

        <table className={styles.episodesTable + ' u-full-width'}>
          <tbody>
            {series.map((episode, index) => {
              return <tr key={index}>
                      <td onClick={handleChangeEpisode}>Серия - {index + 1}</td>
                    </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}

export default AnimePlayer