// import sqlite and sqlite3
const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

// open the database
async function openDb() {
    return sqlite.open({
        filename: "../database.sqlite",
        driver: sqlite3.Database,
    })
}

// initiate the database
async function init() {
    const db = await openDb()
    await db.migrate({ force: "last", migrationsPath: "../migrations" })
    // force: "last" will force the database to migrate to the latest version
    // migrationsPath: "../migrations" will migrate the database to the latest version

    const Person = await db.all("SELECT * FROM Person")
    console.log(JSON.stringify(Person, null, 2))

    const SearchHistory = await db.all("SELECT * FROM SearchHistory")
    console.log(JSON.stringify(SearchHistory, null, 2))

    const Favorite = await db.all("SELECT * FROM Favorite")
    console.log(JSON.stringify(Favorite, null, 2))
}

// call the function
init()
