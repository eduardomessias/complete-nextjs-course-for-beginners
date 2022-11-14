import styles from "./layout.module.css"
import Head from "next/head"
import { navLinks } from "../lib/navLinks"
import Link from "next/link"

export default function Layout({ children, home = false }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>
            <header>
                {
                    home ? (
                        <Home_nav />
                    ) : (
                        <h1>Other page header</h1>
                    )
                }
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    )
}


function Home_nav() {
    return (
        <nav>
            {
                navLinks.map((link, i) => (
                    <ul key={link.name}>
                        <Link href={{
                            pathname: link.path,
                            query: {
                                id: 1,
                            }
                        }}>
                            <li>{link.name}</li>
                        </Link>
                    </ul>
                ))
            }
        </nav>
    )
}