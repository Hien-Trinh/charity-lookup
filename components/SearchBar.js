import styles from "./SearchBar.module.scss"
import { useRouter } from "next/router"
import { useState } from "react"

export default function SearchBar() {
    const [data, setData] = useState({ dir: "" })
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push({
            pathname: data.dir ? "../search" : "../",
            query: data.dir ? data : null,
        })
    }

    return (
        <form className={styles.container}>
            <input
                type="search"
                placeholder="Search"
                className={styles.inputField}
                value={data.dir}
                onChange={(event) =>
                    setData({
                        dir: event.target.value,
                    })
                }
            />
            <button
                className="w-1/5 h-11 font-bold bg-gray-400 rounded-r-full shadow-2xl"
                onClick={handleClick}
            >
                Search
            </button>
        </form>
    )
}
