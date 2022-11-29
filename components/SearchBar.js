import styles from "./SearchBar.module.scss"
import { useState } from "react"
import Router from "next/router"

export default function SearchBar({ isLoggedIn }) {
    const [data, setData] = useState({ dir: "" })

    async function handleClick() {
        console.log(isLoggedIn)
        const resp = await fetch("/api/setSearchHistory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchKey: data.dir,
                ownerId: isLoggedIn,
            }),
        })
        const json = await resp.json()
        console.log(json)

        Router.push({
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
            <button className={styles.button} onClick={handleClick}>
                Search
            </button>
        </form>
    )
}
