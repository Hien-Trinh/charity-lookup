import Head from "next/head"
import { motion } from "framer-motion"
import SearchBar from "../components/SearchBar"

export async function getServerSideProps(context) {
    const dir = `https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=${context.query.dir}`

    const result = await fetch(dir, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json())

    const allSearchResult = result.search.response.projects.project

    return { props: { allSearchResult } }
}

export default function search({ allSearchResult }) {
    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <motion.div className="pl-36 pt-6" layoutId="searchbar">
                <SearchBar />
            </motion.div>
            <div className="pt-10 pl-10">
            <ul>
                {allSearchResult.map((res) => (
                    <li key={res.id}>
                        <a
                            href={res.contactUrl}
                            className="text-xl text-white hover:text-blue-500 hover:underline"
                        >
                            {res.title}
                        </a>
                        <p className="text-base text-white ">
                            {res.summary.slice(0, 100)}...
                        </p>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}
