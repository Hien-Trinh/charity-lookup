import styles from "../styles/index.module.scss"
import Head from "next/head"
import SearchBar from "../components/SearchBar"
import Logo from "../components/Logo"
import Slogan from "../components/Slogan"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <Logo />
            <Slogan />
            <div
                className={styles.searchbar}
            >
                <SearchBar />
            </div>
        </div>
    )
}