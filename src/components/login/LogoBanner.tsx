import styles from '../../styles/components/LogoBanner.module.css';

export function LogoBanner() {
    return(
        <div className={styles.bannerContainer}>
            <img src="./img/logoWhite.png" className={styles.logo}/>
            <h3 className={styles.textBanner}>O aprendizado é infinito!</h3>
        </div>
    )
}