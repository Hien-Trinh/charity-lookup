import styles from "../styles/search.module.scss"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Tooltip, Button } from "@nextui-org/react"
import { HeartIcon } from "../components/HeartIcon"
import Header from "../components/Header"
import isLoggedIn from "./api/isLoggedIn"
import getSearch from "./api/getSearch"

export async function getServerSideProps(ctx) {
    const cookie = await isLoggedIn(ctx)
    const searchResult = await getSearch(ctx)

    return { props: { searchResult, cookie } }
}

export default function search({ searchResult, cookie }) {
    async function handleSave() {
        await fetch("/api/setSearchHistory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchKey: data.dir,
                ownerId: isLoggedIn,
            }),
        })

        Router.push({
            pathname: data.dir ? "../search" : "../",
            query: data.dir ? data : null,
        })
    }

    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <div className={styles.listContainer}>
                <ul>
                    {searchResult !== "empty" ? (
                        searchResult.map((res) => (
                            <li key={res.id}>
                                <div className={styles.listItems}>
                                    <Image
                                        loader={() => res.imageLink}
                                        src={res.imageLink}
                                        width={400}
                                        height={250}
                                        alt="Picture"
                                    />
                                    <div className={styles.text}>
                                        <Link href={res.contactUrl}>
                                            <a className={styles.title}>
                                                {res.title}
                                            </a>
                                        </Link>
                                        <p className={styles.summary}>
                                            {res.summary.slice(0, 100)}...
                                        </p>
                                    </div>
                                    <div className={styles.saveButton}>
                                        <Tooltip
                                            content={"Save to Favorite"}
                                            color="error"
                                        >
                                            <Button
                                                auto
                                                icon={
                                                    <HeartIcon
                                                        fill="currentColor"
                                                        filled
                                                    />
                                                }
                                                color="error"
                                                onPress={handleSave}
                                            ></Button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <br />
                            </li>
                        ))
                    ) : (
                        <li className="text-xl text-white">No results found</li>
                    )}
                </ul>
            </div>
            <Header isSearchBar={true} isLoggedIn={cookie} />
        </div>
    )
}
