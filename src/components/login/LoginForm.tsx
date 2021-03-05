import styles from '../../styles/components/Forms.module.css';

import { useForm } from "react-hook-form";

export function LoginForm() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (

        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <p className={styles.errorMessage}>Nickname ou senha incorretas, tente novamente...</p>

            <h3 className={styles.legend}>Digite seu Nickname:</h3>

            <div className={styles.inputContainer}>
                <input name="nickname" ref={register} placeholder="RastaGod" />
                <img src="./img/userPurple.png" />
            </div>

            <h3 className={styles.legend}>Digite sua senha:</h3>
            <div className={styles.inputContainer}>
                <input name="password" ref={register} placeholder="*********" />
                <img src="./img/password.png" />
            </div>

            <div className={styles.linkContainer}>
                <a className={styles.greenLink} href="#">Esqueceu a senha?</a>
            </div>

            <button type="submit" className={styles.submitButton}>
                <img src="./img/login.png" />
                Login
            </button>

            <div className={styles.linkContainer}>
                <a className={styles.greenLink} href="/Register">Registre-se</a>
            </div>


        </form>
    )
}