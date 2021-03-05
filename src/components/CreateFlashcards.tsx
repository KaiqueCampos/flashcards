import styles from '../styles/components/Flashcards.module.css';

export function CreateFlashcards() {
    return (
        <div className={styles.flashcardsContainer}>

            <div>
                <h3 className={styles.legend}>Frente:</h3>
            </div>
            <textarea className={styles.flashcardText}
            placeholder="Digite a frente do Flashcard...">
            </textarea>


            <div>
                <h3 className={styles.legend}>Verso:</h3>
            </div>
            <textarea className={styles.flashcardText}
             placeholder="Digite o verso do Flashcard...">
            </textarea>

            <button className={styles.createNewFlashcardButton}>
                Criar Flashcard
            </button>


        </div>
    )
}