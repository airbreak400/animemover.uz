import styles from './layout.module.css';
import Link from 'next/link';
const Layout = ({children}) => {
  return (
    <div className='container'>
        <header>
            <nav className={`row ` + styles.mainNav}>
                <ul className="twelve columns">
                    <li><Link href="/"><a>Anime 🍑</a></Link></li>
                    <li><Link href="/contacts"><a>Contacts 📬</a></Link></li>
                </ul>
            </nav>
        </header>
            <div className={styles.main}>
                {children}
            </div>
        <footer className={`row ` + styles.footer}>
                <span>
                    All rights reserved &copy;
                </span>
                <span className='u-pull-right'>Made with Express & NextJs</span>
        </footer>
    </div>
  )
}

export default Layout