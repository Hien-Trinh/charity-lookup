import styles from "../styles/search.module.scss"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Header from "../components/Header"
import { isLoggedIn } from "./api/isLoggedIn"

export async function getServerSideProps(ctx) {
    const cookie = await isLoggedIn(ctx)
    const dir = `https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=${ctx.query.dir}`

    const result = await fetch(dir, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json())

    var allSearchResult = result.search.response.projects
    console.log(allSearchResult)
    var output = "empty"

    if (allSearchResult !== undefined) {
        output = allSearchResult.project
    }

    return { props: { output, cookie } }
}

export default function search({ output, cookie }) {
    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <div className={styles.listContainer}>
                <ul>
                    {output !== "empty" ? (
                        output.map((res) => (
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
