import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Image from 'react-bootstrap/Image'

export default function Prezesi() {
    return (
        <div className={styles.container}>
            <Head>
                <title>KKS Korczów - Prezesi</title>
                <meta name="description" content="KKS Korczów - najlepsza drużyna w światowej lidze. Może nie gramy dobrze za to nie grzeszymy umiejętnościami grania w piłke. Mamy za to kiboli." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Prezesi włodarze i ogólne królowie
                </h1>
                <p className={styles.description}>
                    Wielkimi włodarzami i prezesami tego pieknego klubu KKS Korczów sa arek jako prezes oraz maciek jako selekcjoner bo był czarny a to teraz modne aby jacys egzotyczni byli trenerami
                </p>
                <Image src="/kkskorczow.png" fluid />
            </main>
        </div>

    )
}
