import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
//bootstrap imports
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

export default function Druzyna() {
    return (
        <Container>
            <Head>
                <title>KKS Korczów - Drużyna</title>
                <meta name="description" content="KKS Korczów - najlepsza drużyna w światowej lidze. Może nie gramy dobrze za to nie grzeszymy umiejętnościami grania w piłke. Mamy za to kiboli." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    może i robimy chujowo ale kto robi dobrze? wiec jest na odpierdol
                </h1>
                <p className={styles.description}>
                    Nie ma żadynch zawodnikow jakby sie to keidsy zmienily to napsize narazie elo
                 </p>
                <Image src="/kkskorczow.png" fluid />
            </main>
        </Container>

    )
}
