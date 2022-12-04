const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

async function openDb() {
    return sqlite.open({
        filename: "../database.sqlite",
        driver: sqlite3.Database,
    })
}

async function init() {
    const db = await openDb()
    await db.migrate({ force: "last", migrationsPath: "../migrations" })

    const Person = await db.all("SELECT * FROM Person")
    console.log(JSON.stringify(Person, null, 2))

    const SearchHistory = await db.all("SELECT * FROM SearchHistory")
    console.log(JSON.stringify(SearchHistory, null, 2))

    const Favorite = await db.all("SELECT * FROM Favorite")
    console.log(JSON.stringify(Favorite, null, 2))
}

init()
