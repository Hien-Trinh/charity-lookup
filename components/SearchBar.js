import styles from "./SearchBar.module.scss"
import { useState } from "react"
import Router from "next/router"

export default function SearchBar({ isLoggedIn }) {
    const [data, setData] = useState({ dir: "" })

    async function handleClick() {
        await fetch("/api/setSearchHistory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchKey: data.dir,
                ownerId: isLoggedIn,
            }),
        })

        Router.push({
            pathname: data.dir ? "../search" : "../",
            query: data.dir ? data : null,
        })
    }

    return (
        <div className={styles.container} noValidate autoComplete="on">
            <input
                type="search"
                placeholder="Search"
                className={styles.inputField}
                value={data.dir}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleClick()
                    }
                }}
                onChange={(event) =>
                    setData({
                        dir: event.target.value,
                    })
                }
            />
            <button className={styles.button} onClick={handleClick}>
                Search
            </button>
        </div>
    )
}
