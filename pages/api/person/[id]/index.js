const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")
import { verify } from "jsonwebtoken"

async function openDb() {
    return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    })
}

const authenticated = (fn) => (req, res) => {
    verify(
        req.headers.authorization,
        "" + process.env.auth_secret,
        async function (err, decoded) {
            if (!err && decoded) {
                return await fn(req, res)
            }

            res.status(401).json({ message: "Sorry you are not authenticated" })
        }
    )
}

export default authenticated(async function getPersonById(req, res) {
    const db = await openDb()

    if (req.method === "PUT") {
        const statement = await db.prepare(
            "UPDATE Person SET name = ?, email = ? WHERE id = ?"
        )
        const result = await statement.run(
            req.body.name,
            req.body.email,
            req.query.id
        )
        result.finalize()
    }

    const person = await db.get(
        "SELECT id, email, name FROM Person WHERE id = ?",
        [req.query.id]
    )

    res.json(person)
})
