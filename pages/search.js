import Head from "next/head"
import Header from "../components/Header"
import Link from "next/link"
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
            <div className="pt-28 pl-10">
                <ul>
                    {output !== "empty" ? (
                        output.map((res) => (
                            <li key={res.id}>
                                <Link href={res.contactUrl}>
                                    <a className="text-xl text-white hover:text-blue-500 hover:underline">
                                        {res.title}
                                    </a>
                                </Link>
                                <p className="text-base text-white ">
                                    {res.summary.slice(0, 100)}...
                                </p>
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
