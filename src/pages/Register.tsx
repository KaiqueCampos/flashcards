import  Head  from "next/head";
import { RegisterForm } from "../components/login/Register";
import { LogoBanner } from "../components/login/LogoBanner";


export default function Register() {
    return (
        <div className="container">

            <Head>
                <title>Login | Flashcards</title>
            </Head>

            <main>
                <LogoBanner />
                <RegisterForm/>
            </main>
        </div>
    )
}