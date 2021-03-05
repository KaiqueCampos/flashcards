import  Head  from "next/head";
import { Flashcards } from "../components/Flashcards";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (

    <div className="container">

      <Head>
        <title>Home | Flashcards</title>
      </Head>

      <NavBar/>

      <section>
        <Flashcards/>
      </section>

    </div>

  )
}
