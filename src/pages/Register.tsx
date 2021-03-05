import  Head  from "next/head";
import { RegisterForm } from "../components/Register";
import { LogoBanner } from "../components/LogoBanner";


export default function Register() {
    return (
        <div className="container">

            <Head>
                <title>Register | Flashcards</title>
            </Head>

            <main>
                <LogoBanner />
                <RegisterForm/>
            </main>
        </div>
    )
}