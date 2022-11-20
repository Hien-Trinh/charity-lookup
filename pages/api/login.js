import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import cookie from "cookie"

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

async function openDb() {
    return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    })
}

export default async function login(req, res) {
    const db = await openDb()

    if (req.method === "POST") {
        const person = await db.get("SELECT * FROM Person WHERE email = ?", [
            req.body.email,
        ])
        compare(
            req.body.password,
            person.password,
            async function (err, result) {
                if (!err && result) {
                    const claims = {
                        sub: person.id,
                        myPersonEmail: person.email,
                    }
                    const jwt = sign(claims, "" + process.env.auth_secret, {
                        expiresIn: "1h",
                    })

                    res.setHeader(
                        "Set-Cookie",
                        cookie.serialize("auth", jwt, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== "development",
                            sameSite: "strict",
                            maxAge: 3600,
                            path: "/",
                        })
                    )
                    res.json({ message: "Login success" })
                } else {
                    res.json({ message: "Login failed" })
                }
            }
        )
    } else {
        res.status(405).json({ message: "We only support POST" })
    }
}
