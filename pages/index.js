import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import Slogan from '../components/Slogan'
import Logo from '../components/Logo'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Charity search</title>
            </Head>
            <div className="w-full text-center overflow-hidden">
                <Slogan />
            </div>
            <div className="pt-80">
                <Logo />
            </div>
        </div>
    )
}