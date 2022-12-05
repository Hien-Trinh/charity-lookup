import styles from "./Header.module.scss"
import SearchBar from "./SearchBar"
import Router from "next/router"
import { Tooltip, Button } from "@nextui-org/react"
import { Left } from "./ArrowIcon"

export default function Header({ isSearchBar, isLoggedIn }) {
    async function handleClick() {
        const resp = await fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const json = await resp.json()
        console.log(json)
        Router.push("/login")
    }

    function handlePrev() {
        Router.push("/")
    }

    return (
        <div
            className={`${styles.container} ${
                isSearchBar ? null : styles.animate
            }`}
        >
            {isSearchBar ? <div className={styles.left}>
                <Tooltip content={"Back"} color="invert" placement="bottomEnd">
                    <Button
                        auto
                        icon={<Left />}
                        color="invert"
                        onPress={handlePrev}
                    ></Button>
                </Tooltip>
            </div> : null}

            {isSearchBar ? (
                <div className={styles.SearchBar}>
                    <SearchBar isLoggedIn={isLoggedIn} />
                </div>
            ) : null}
            <button className={styles.button} onClick={handleClick}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    )
}
