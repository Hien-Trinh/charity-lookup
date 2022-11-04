import styles from "../styles/index.module.scss"
import Head from "next/head"
import { motion } from "framer-motion"
import SearchBar from "../components/SearchBar"
import Slogan from "../components/Slogan"
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
