import { verify } from "jsonwebtoken"

export default async function isLoggedIn(ctx) {
    try {
        var decoded = verify(ctx.req.cookies.auth, "" + process.env.auth_secret)
    } catch (err) {
        console.log(err)
        return false
    }

    return decoded.sub
}
