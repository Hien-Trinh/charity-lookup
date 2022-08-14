import styles from "./SearchBar.module.scss"
import Link from 'next/link'
import { useState } from 'react'

export default function SearchBar() {
    const [data, setData] = useState({ dir: "" })

    return (
        <form className={styles.container}>
            <input
                type="search"
                placeholder="Search"
                className={styles.inputField}
                value={data.dir}
                onChange={(event) =>
                    setData({
                        dir: event.target.value
                    })
                }
            />
            <Link href={{
                pathname: data.dir ? "../SearchResults" : "../",
                query: data.dir ? data : null
            }}>
                <button className="w-1/5 h-11 font-bold bg-gray-400 rounded-r-full shadow-2xl">
                    Click me
                </button>
            </Link>
        </form>
    )
}