import styles from "../styles/index.module.scss"
import Head from "next/head"
import SearchBar from "../components/SearchBar"
import Logo from "../components/Logo"
import Slogan from "../components/Slogan"
import Header from "../components/Header"
import { isLoggedIn } from "./api/isLoggedIn"

export default function Home({ cookie }) {
    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <Logo />
            <Slogan />
            <div className={styles.searchbar}>
                <SearchBar />
            </div>
            <Header isSearchBar={false} isLoggedIn={cookie} />
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = await isLoggedIn(ctx)
    return {
        props: {
            cookie,
        },
    }
}
