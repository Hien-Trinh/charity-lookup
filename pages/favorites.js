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
import { myGet } from "./api/myGet"

export async function getServerSideProps(ctx) {
    const auth = await isLoggedIn(ctx)
    const url = `http://localhost:3000/api/person/${auth}/getFavoriteById`
    const allFavorite = await myGet(url, ctx)

    return {
        props: {
            allFavorite,
        },
    }
}

export default function search({ allFavorite }) {
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

    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <Header isSearchBar={true} isLoggedIn={isLoggedIn} />
            <div className={styles.searchKey}></div>
            <div className={styles.listContainer}>
                <ul>
                    {allFavorite !== "empty" ? (
                        allFavorite.map((res) => (
                            <li key={res.charityId}>
                                <div className={styles.listItems}>
                                    <Image
                                        loader={() => res.charityImage}
                                        src={res.charityImage}
                                        width={400}
                                        height={250}
                                        alt="Picture"
                                    />
                                    <div className={styles.text}>
                                        <Link href={res.charityUrl}>
                                            <a className={styles.title}>
                                                {res.charityTitle}
                                            </a>
                                        </Link>
                                        <p className={styles.summary}>
                                            {res.charitySummary.slice(0, 100)}
                                            ...
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
                                                    handleSave(res.charityId)
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
        </div>
    )
}
