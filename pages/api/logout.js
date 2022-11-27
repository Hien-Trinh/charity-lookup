import cookie from "cookie"

export default async function logout(req, res) {
    if (req.method === "POST") {
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("auth", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                expires: new Date(0),
                path: "/",
            })
        )
        res.json({ message: "Logout success", success: true })
        console.log("Logout success")
    } else {
        res.status(405).json({
            message: "We only support POST",
            success: false,
        })
    }
}
