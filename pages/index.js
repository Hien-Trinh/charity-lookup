import Head from 'next/head'
import SearchBar from '../components/SearchBar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <div className="pt-80">
                <SearchBar />
            </div>
        </div>
    )
}