import styles from "./Header.module.scss"
import SearchBar from "./SearchBar"
import Router from "next/router"

export default function Header({ isSearchBar, isLoggedIn }) {
    async function handleClick() {
        const resp = await fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        Router.push("/login")
    }

    return (
        <div
            className={`${styles.container} ${
                isSearchBar ? null : styles.animate
            }`}
        >
            {isSearchBar ? (
                <div className={styles.SearchBar}>
                    <SearchBar />
                </div>
            ) : null}
            <button className={styles.button} onClick={handleClick}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    )
}
