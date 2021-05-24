import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KKS Korczów - LIGA KURWA WYŻEJ</title>
        <meta name="description" content="KKS Korczów - najlepsza drużyna w światowej lidze. Może nie gramy dobrze za to nie grzeszymy umiejętnościami grania w piłke. Mamy za to kiboli." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          korczów to jest <a target="_blank" href="https://pl.wikipedia.org/wiki/Pot%C4%99gi">potęga!</a>
        </h1>
        <h1 className={styles.title}>
          Aleks to jest chuj!
        </h1>

        <p className={styles.description}>
          Korczów najlepszy jest, Korczów to chuligani, Korczów KKS
        </p>

        <div className={styles.grid}>
          <a href="/druzyna" className={styles.card}>
            <h2>Drużyna &rarr;</h2>
            <p>Drużynka zajebista kurwa jego mać ze to chuj heheh Akutalnie zawodników - 0</p>
          </a>

          <a href="/prezesi" className={styles.card}>
            <h2>Prezesi &rarr;</h2>
            <p>WIELCY I POTEŻNI WŁODARZE JAK I PREZESI BOGOWIE PREZYDENCI I WSZYSTKO INNE</p>
          </a>

          <a
            href="/kontakt"
            className={styles.card}
          >
            <h2>Kontakt &rarr;</h2>
            <p>Jeśli myślisz że możesz sobie u nas tak po prostu kupić mecz to masz racje! sprzedamy każdy mecz za 200 zł jak z fakturą to troche drożej</p>
          </a>

          <a
            href="/modlitewniczek-kibola"
            className={styles.card}
          >
            <h2>Modlitewnik kibola &rarr;</h2>
            <p>
              Może i nie mamy boiska ani zawodników, nawet kurwa piłki nie mamy. mamy za to kiboli a to jest najwaznbiejsze jesli chicialbys zostac jedny z nich to naucz sie przyspiewek zajebisice
            </p>
          </a>
        </div>
      </main>
      <footer>
        <a href='https://www.counters-free.net/'>https://www.counters-free.net/</a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=bf7a34a574afe9b0919a301fef2babb3f2edc57c'></script>
        <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/830879/t/0"></script>
      </footer>
    </div>
  )
}
