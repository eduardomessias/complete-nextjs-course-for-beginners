import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/sass/style.module.scss"
import Layout from "../layout/layout"

export default function FirstPost() {
    const year2022img = "/images/undraw_year_2022_uci7.svg"
    return (
        <Layout>
            <Head>
                <title>Nextjs First Post</title>
            </Head>
            <h1 className={styles['title']}>First Post</h1>
        </Layout>
    )
}