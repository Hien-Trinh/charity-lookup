import styles from "../styles/search.module.scss"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Router from "next/router"
import { Tooltip, Button } from "@nextui-org/react"
import { HeartIcon } from "../components/HeartIcon"
import { Left, Right } from "../components/ArrowIcon"
import Header from "../components/Header"
import isLoggedIn from "./api/isLoggedIn"
import getSearch from "./api/getSearch"

export async function getServerSideProps(ctx) {
    const auth = await isLoggedIn(ctx)
    const result = await getSearch(ctx)
    const searchResult = await result.output
    const searchKey = await result.q
    const searchStart = await result.start
    const searchNumberFound = await result.numberFound

    return {
        props: {
            searchResult,
            isLoggedIn: auth,
            searchKey,
            searchStart,
            searchNumberFound,
        },
    }
}

export default function search({
    searchResult,
    isLoggedIn,
    searchKey,
    searchStart,
    searchNumberFound,
}) {
    async function handleSave(charityId) {
        await fetch("/api/setFavorite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                charityId: charityId,
                ownerId: isLoggedIn,
            }),
        })
    }

    async function handlePrev() {
        const prevStart =
            parseInt(searchStart) - 10 < 0 ? 0 : parseInt(searchStart) - 10

        Router.push({
            pathname: searchKey ? "../search" : "../",
            query: { dir: searchKey, start: prevStart },
        })
    }

    async function handleNext() {
        const nextStart =
            parseInt(searchStart) + 20 > searchNumberFound ? 0 : parseInt(searchStart) + 10

        Router.push({
            pathname: searchKey ? "../search" : "../",
            query: { dir: searchKey, start: nextStart },
        })
    }

    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <Header isSearchBar={true} isLoggedIn={isLoggedIn} />
            <div className={styles.searchKey}>
                Showing results for: {searchKey}
            </div>
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
                                                onPress={() =>
                                                    handleSave(res.id)
                                                }
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
            <div className={styles.prevNext}>
                <Tooltip
                    content={"Previous page"}
                    color="invert"
                    placement="bottomEnd"
                >
                    <Button
                        auto
                        icon={<Left />}
                        color="invert"
                        onPress={handlePrev}
                    ></Button>
                </Tooltip>
                <div className={styles.pageNumber}>
                    {~~(searchStart / 10) + 1}
                </div>
                <Tooltip
                    content={"Next page"}
                    color="invert"
                    placement="bottomStart"
                >
                    <Button
                        auto
                        icon={<Right />}
                        color="invert"
                        onPress={handleNext}
                    ></Button>
                </Tooltip>
            </div>
        </div>
    )
}
