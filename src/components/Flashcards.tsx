import styles from '../styles/components/Flashcards.module.css';

export function Flashcards() {
    return (
        <div className={styles.flashcardsContainer}>

            <div>
                <h3 className={styles.legend}>Frente:</h3>
                <button className={styles.editButton}>
                    <img src="./img/edit.png" />
                </button>
            </div>

            <textarea className={styles.flashcardText} disabled>
                What's your name?
            </textarea>


            <div>
                <h3 className={styles.legend}>Verso:</h3>
                <button className={styles.showButton}>Mostrar</button>
            </div>


            <textarea className={styles.flashcardText} disabled>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
            </textarea>

            <div>
                <button className={styles.flashcardsResultButton}>
                    <img src="./img/unlike.png" />
                    Errei
                </button>

                <button className={styles.flashcardsResultButton}>
                    Acertei
                    <img src="./img/like.png" />
                </button>
            </div>

        </div>
    )
}