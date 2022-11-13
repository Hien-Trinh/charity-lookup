import styles from "../styles/index.module.scss"
import Head from "next/head"
import SearchBar from "../components/SearchBar"
import Logo from "../components/Logo"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <Logo />
            <div
                className={styles.searchbar}
                layoutId="searchbar"
            >
                <SearchBar />
            </div>
        </div>
    )
}
