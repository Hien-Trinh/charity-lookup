import { compare } from "bcrypt"
import { sign, verify } from "jsonwebtoken"

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

                    res.json({ message: "Logged in!", token: jwt })
                } else {
                    res.json({ message: "Login failed" })
                }
            }
        )
    } else {
        res.status(405).json({ message: "We only support POST" })
    }
}
