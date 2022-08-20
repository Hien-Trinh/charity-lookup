import Head from "next/head"
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
            <Slogan />
            <div className="absolute top-1/2 right-1/2 translate-x-1/2">
                <SearchBar />
            </div>
        </div>
    )
}
