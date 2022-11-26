import styles from "./Header.module.scss"
import SearchBar from "./SearchBar"

export default function Header() {
    return (
        <div>
            <div className={styles.SearchBar}>
                <SearchBar />
            </div>
        </div>
    )
}
