import styles from '../styles/components/FlashcardsStatistic.module.css';

export function FlashcardsStatistic() {
    return (
        <div className={styles.statisticContainer}>
            <img src='./img/naruto.jpg' />

            <h2>Flashcards</h2>

            <div className={styles.statistic}>
                <p>Revisar: </p>
                <p className={styles.numberStatistic}>50</p>
            </div>

            <div className={styles.statistic}>
                <p>Errei: </p>
                <p className={styles.numberStatistic}>5</p>
            </div>

            <div className={styles.statistic}>
                <p>Acertei: </p>
                <p className={styles.numberStatistic}>25</p>
            </div>

            <div className={styles.statistic}>
                <p>Concluidos: </p>
                <p className={styles.numberStatistic}>25</p>
            </div>

            <a href="/CreateFlashcard">
                <button className={styles.CreateFlashcardButton}>
                    Criar novo Flashcard
                </button>
            </a>

            <button className={styles.DeleteFlashcardButton}>Deletar Flashcard</button>
        </div>
    )
}