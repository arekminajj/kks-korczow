import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
//bootstrap imports
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

export default function Kontakt() {
    return (
        <Container>
            <Head>
                <title>KKS Korczów - Kontakt</title>
                <meta name="description" content="KKS Korczów - najlepsza drużyna w światowej lidze. Może nie gramy dobrze za to nie grzeszymy umiejętnościami grania w piłke. Mamy za to kiboli." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    TAKI CHUJ
                </h1>
                <p className={styles.description}>
                    TYLKO WYBRANI ZNAJĄ NASZ NUMER ZA TO ZAPRASZAMY NA KONTO NA E BAZARKU CZASAMI COS OPIERODLIMY FORTY-FORTY
                 </p>
                <Image src="/kkskorczow.png" fluid />
            </main>
        </Container>
    )
}
