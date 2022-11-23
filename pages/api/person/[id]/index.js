const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")
import { authenticated } from "../../authenticate"

async function openDb() {
    return sqlite.open({
        filename: "../database.sqlite",
        driver: sqlite3.Database,
    })
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
