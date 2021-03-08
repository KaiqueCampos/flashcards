import Head from "next/head";
import ChoseLoginOrRegister from "../components/ChoseLoginOrRegister";
import { Flashcards } from "../components/Flashcards";
import { FlashcardsStatistic } from "../components/FlashcardsStatistic";
import { NavBar } from "../components/NavBar";
import styles from '../styles/pages/index.module.css';

export default function Home() {

  const logged = false;

  return (

    <div className="container">

      <Head>
        <title>Home | Flashcards</title>
      </Head>

      <NavBar />

      <section className={styles.flashcardsSection}>
        <Flashcards />
        
        {logged ? (<FlashcardsStatistic />) :  (<ChoseLoginOrRegister/>)}
       
      </section>

    </div>

  )
}
