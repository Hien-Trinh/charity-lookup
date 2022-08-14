import styles from "./Slogan.module.scss"

export default function Slogan() {
    return (
        <div className={styles.container}>
            <div className={styles.slogan}>
                <div className={`${styles.slogan} ${styles.left}`}>Find</div>
                <div className={`${styles.slogan} ${styles.right}`}>
                    <span>your next charity</span>
                </div>
            </div>
        </div>
    )
}
