// import libraries
import { compare } from "bcrypt"        // for verifying hashed password
import { sign } from "jsonwebtoken"     // for JWT
import cookie from "cookie"             // for cookie

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

// login API function
export default async function login(req, res) {
    const db = await openDb()

    // check if the request method is POST
    if (req.method === "POST") {
        // check if the email and password are provided
        const person = await db.get("SELECT * FROM Person WHERE email = ?", [
            req.body.email,
        ])

        if (!person) {
            res.status(401).json({ message: "Wrong email or password", success: false })
            return
        }

        // verify the password
        compare(
            req.body.password,
            person.password,
            async function (err, result) {
                if (!err && result) {
                    // create a JWT
                    const claims = {
                        sub: person.id,
                        myPersonEmail: person.email,
                    }

                    // sign the JWT, set to expire in 1 hour
                    const jwt = sign(claims, "" + process.env.auth_secret, {
                        expiresIn: "1h",
                    })

                    // set the cookie with the JWT in the response header
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
                    res.json({ message: "Login success", success: true })
                } else {
                    res.json({ message: "Login failed", success: false })
                }
            }
        )
    } else {
        res.status(405).json({ message: "We only support POST", success: false })
    }
}
