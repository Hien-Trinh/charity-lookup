import styles from "./Card.module.scss"
import { useRef } from "react"
import Link from "next/link"
import Router from "next/router"

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
            }),
        })
        const json = await resp.json()
        console.log(json)
        if (json.success) {
            Router.push("/")
        }
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
            }),
        })
        const json = await resp.json()
        console.log(json)
        if (json.success) {
            Router.push("/login")
        }
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
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleClick()
                    }
                }}
            />
            {login ? null : (
                <input
                    type="text"
                    placeholder="name"
                    className={styles.inputField}
                    ref={nameRef}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleClick()
                        }
                    }}
                />
            )}
            <input
                type="password"
                placeholder="password"
                className={styles.inputField}
                ref={passwordRef}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleClick()
                    }
                }}
            />
            <button className={styles.button} onClick={handleClick}>
                {login ? "Login" : "Sign Up"}
            </button>
            {login ? (
                <Link href="./signup">
                    <div className={styles.link}>Create a new account.</div>
                </Link>
            ) : (
                <Link href="./login">
                    <div className={styles.link}>Already have an account?</div>
                </Link>
            )}
        </div>
    )
}
