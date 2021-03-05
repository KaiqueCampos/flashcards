import  Head  from "next/head";
import { LoginForm } from "../components/login/LoginForm";
import { LogoBanner } from "../components/login/LogoBanner";

export default function Login() {
    return (

        <div className="container">

            <Head>
                <title>Login | Flashcards</title>
            </Head>

            <main>
                <LogoBanner />
                <LoginForm />
            </main>
        </div>
    )
}

