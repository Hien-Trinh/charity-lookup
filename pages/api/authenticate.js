import { verify } from "jsonwebtoken"

export const authenticated = (fn) => async (req, res) => {
    // verify auth token
    verify(
        req.cookies.auth,
        "" + process.env.auth_secret,
        async function (err, decoded) {
            // If authenticated, return the function
            if (!err && decoded) {
                return await fn(req, res)
            }

            // If not authenticated, return 401
            res.status(401).json({ message: "Sorry you are not authenticated", success: false })
        }
    )
}
