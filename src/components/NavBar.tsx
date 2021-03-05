import styles from '../styles/components/NavBar.module.css';

export function NavBar() {
    return(
        <div className={styles.navBarContainer}>
            <button>
                <img src="./img/logo-circleBlack.png"/>
            </button>

            <button>
                <img src="./img/LeftArrow.png"/>
            </button>
        </div>
    )
}