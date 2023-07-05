import { hash } from "bcrypt"

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

async function openDb() {
    return sqlite.open({
        filename: "../database.sqlite",
        driver: sqlite3.Database,
    })
}

export default async function signup(req, res) {
    const db = await openDb()

    if (req.method === "POST") {
        if (!req.body.name || !req.body.email || !req.body.password) {
            res.status(400).json({ message: "Missing fields", success: false })
            return
        }

        const person = await db.get("SELECT * FROM Person WHERE email = ?", [
            req.body.email,
        ])

        if (person) {
            res.status(401).json({ message: "Account already exist", success: false })
            return
        }

        hash(req.body.password, 12, async function (err, hash) {
            const statement = await db.prepare(
                "INSERT INTO Person (name, email, password) VALUES (?, ?, ?)"
            )

            await statement.run(req.body.name, req.body.email, hash)
            res.json({ message: "Signup success", success: true })
        })
    } else {
        res.status(405).json({
            message: "We only support POST",
            success: false,
        })
    }
}
