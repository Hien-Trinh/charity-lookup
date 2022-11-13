const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

async function openDb() {
    return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    })
}

export default async function getPersonById(req, res) {
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

    const person = await db.get("SELECT * FROM Person WHERE id = ?", [
        req.query.id,
    ])

    res.json(person)
}
