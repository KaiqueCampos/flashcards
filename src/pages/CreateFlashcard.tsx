import  Head  from "next/head";
import { CreateFlashcards } from "../components/CreateFlashcards";
import { NavBar } from "../components/NavBar";

export default function CreateFlashcard() {
    return (

        <div className="container">

            <Head>
                <title>Login | Flashcards</title>
            </Head>

            <NavBar/>
            <CreateFlashcards/>
        </div>
    )
}
