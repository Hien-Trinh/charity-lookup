import { hash } from "bcrypt"

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

async function openDb() {
    return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    })
}

export default async function signup(req, res) {
    const db = await openDb()

    if (req.method === "POST") {
        hash(req.body.password, 12, async function (err, hash) {
            const statement = await db.prepare(
                "INSERT INTO Person (name, email, password) VALUES (?, ?, ?)"
            )
            await statement.run(req.body.name, req.body.email, hash)

            const person = await db.all("SELECT id, email, name FROM Person")
            res.json(person)
        })
    } else {
        res.status(405).json({ message: "We only support POST" })
    }
}