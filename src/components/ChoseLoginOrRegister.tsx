import styles from '../styles/components/ChoseLoginOrRegister.module.css';

export default function ChoseLoginOrRegister(){
    return(
        <div className={styles.container}>
            
            <img src='./img/userPurple2.png' />

            <div className={styles.loginOrRegisterContainer}>
                <button>Registre-se</button>

                <button>
                    <img src='./img/loginGreen.png'/>
                    Logar-se
                </button>
            </div>
            

        </div>
    )
}