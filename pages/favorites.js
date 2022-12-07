import styles from "../styles/search.module.scss"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Tooltip, Button } from "@nextui-org/react"
import { HeartIcon } from "../components/HeartIcon"
import Header from "../components/Header"
import isLoggedIn from "./api/isLoggedIn"
import { myGet } from "./api/myGet"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

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

    async function handleScreenShot() {
        const doc = new jsPDF()
        const element = document.getElementById("favorites")
        await html2canvas(element).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/png"), "PNG", 10, 10, 190, 150)
        })
        doc.save("favorites.pdf")
    }

    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <Header isSearchBar={true} isLoggedIn={isLoggedIn} />
            <div className={styles.searchKey}></div>
            <div id="favorites" className={styles.listContainer}>
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
            <button className={styles.button} onClick={handleScreenShot}>
                Save to PDF
            </button>
        </div>
    )
}
