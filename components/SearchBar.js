import styles from "./SearchBar.module.scss"
import Link from 'next/link'
import { useState } from 'react'

export default function SearchBar() {
    const [data, setData] = useState({ dir: "" })

    return (
        <form className={styles.container}>
            <input
                type="text"
                placeholder="Search"
                className="w-5/6 h-11 border-[1px] border-gray-400 pl-4 rounded-l-3xl shadow-2xl"
                value={data.dir}
                onChange={(event) =>
                    setData({
                        dir: event.target.value
                    })
                }
            />
            <Link href={{
                pathname: "../SearchResults",
                query: data
            }}>
                <button className="w-1/6 h-11 font-bold bg-gray-400 rounded-r-full shadow-2xl">
                    Click me
                </button>
            </Link>
        </form>
    )
}