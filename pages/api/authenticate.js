import { verify } from "jsonwebtoken"

export const authenticated = (fn) => async (req, res) => {
    verify(
        req.cookies.auth,
        "" + process.env.auth_secret,
        async function (err, decoded) {
            if (!err && decoded) {
                return await fn(req, res)
            }

            res.status(401).json({ message: "Sorry you are not authenticated" })
        }
    )
}
