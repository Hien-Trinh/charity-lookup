const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

async function openDb() {
    return sqlite.open({
        filename: "../database.sqlite",
        driver: sqlite3.Database,
    })
}

export default async function setSearchHistory(req, res) {
    const db = await openDb()

    if (req.method === "POST") {
        const statement = await db.prepare(
            "INSERT INTO SearchHistory (searchKey, ownerId) VALUES (?, ?)"
        )
        await statement.run(req.body.searchKey, req.body.ownerId)
        const allSearchHistory = await db.all("SELECT * FROM SearchHistory")
        console.log(allSearchHistory)
        res.json({ message: "Search history added", success: true })
    } else {
        res.status(405).json({
            message: "We only support POST",
            success: false,
        })
    }
}
