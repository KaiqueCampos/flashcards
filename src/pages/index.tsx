import  Head  from "next/head";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (

    <div className="container">

      <Head>
        <title>Home | Flashcards</title>
      </Head>

      <NavBar/>

      <a href="/Login">Clique em mim</a>





    </div>

  )
}
