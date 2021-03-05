import styles from '../styles/components/Forms.module.css';

import { useForm } from "react-hook-form";

export function RegisterForm() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (

        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>

            <div className={styles.perfil}>
                <div>
                    <h3 className={styles.legend}>Selecione uma imagem para o perfil:</h3>
                </div>
                <button><p>Imagem</p></button>
            </div>

            <h3 className={styles.legend}>Digite seu Nickname:</h3>
            <div className={styles.inputContainer}>
                <input name="nickname" ref={register} placeholder="RastaGod" />
                <img src="./img/userPurple.png" />
            </div>

            <h3 className={styles.legend}> Digite sua Senha:</h3>
            <div className={styles.inputContainer}>
                <input name="password" ref={register} placeholder="*********" />
                <img src="./img/password.png" />
            </div>

            <button type="submit" className={styles.submitButton}>
                <img src="./img/login.png" />
                Registrar-se
            </button>

            <div className={styles.linkContainer}>
                <a className={styles.greenLink} href="/Login">Voltar para Login...</a>
            </div>

        </form>
    )
}