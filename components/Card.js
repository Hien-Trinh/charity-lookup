import styles from "./Card.module.scss"
import { useRef } from "react"
import Link from "next/link"

export default function Card({ login }) {
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()

    async function handleLogin() {
        const resp = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
        })
        const json = await resp.json()
        console.log(json)
    }

    async function handleSignup() {
        const resp = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                name: nameRef.current.value,
                password: passwordRef.current.value,
            })
        })
        const json = await resp.json()
        console.log(json)
    }

    async function handleClick() {
        login ? await handleLogin() : await handleSignup()
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>{login ? "Login" : "Sign Up"}</div>
            <input
                type="text"
                placeholder="email"
                className={styles.inputField}
                ref={emailRef}
            />
            {login ? null : (
                <input
                    type="text"
                    placeholder="name"
                    className={styles.inputField}
                    ref={nameRef}
                />
            )}
            <input
                type="password"
                placeholder="password"
                className={styles.inputField}
                ref={passwordRef}
            />
            <button className={styles.button} onClick={handleClick}>
                {login ? "Login" : "Sign Up"}
            </button>
            {login ? (
                <Link href="./signup"><div className={styles.link}>Create a new account.</div></Link>
            ) : (
                <Link href="./login"><div className={styles.link}>Already have an account?</div></Link>
            )}
        </div>
    )
}
