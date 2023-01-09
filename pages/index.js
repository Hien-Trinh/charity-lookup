import styles from "../styles/index.module.scss"
import Head from "next/head"
import SearchBar from "../components/SearchBar"
import Logo from "../components/Logo"
import Header from "../components/Header"
import isLoggedIn from "./api/isLoggedIn"
import Router from "next/router"

export async function getServerSideProps(ctx) {
    const cookie = await isLoggedIn(ctx)
    return {
        props: {
            cookie,
        },
    }
}

export default function Home({ cookie }) {
    async function handleSearchHistory() {
        const url = `/api/person/${cookie}/getSearchHistoryById`

        const allSearchHistory = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }).then((res) => res.json())

        console.log(allSearchHistory)
        if (allSearchHistory.success === false) {
            Router.push({
                pathname: "../login",
            })

            return
        } else if (allSearchHistory.length === 0) {
            return
        }

        const lastSearch = allSearchHistory[allSearchHistory.length - 1]

        Router.push({
            pathname: lastSearch.searchKey ? "../search" : "../",
            query: { dir: lastSearch.searchKey, start: 0 },
        })
    }

    async function handleFavorite() {
        Router.push({
            pathname: "../favorites",
        })
    }

    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <Logo />
            <div className={styles.searchbar}>
                <SearchBar isLoggedIn={cookie} />
            </div>
            <Header isSearchBar={false} isLoggedIn={cookie} />
            <div className={styles.container}>
                <button className={styles.button} onClick={handleSearchHistory}>
                    Last search
                </button>
                <button className={styles.button} onClick={handleFavorite}>
                    Favorites
                </button>
            </div>
        </div>
    )
}
