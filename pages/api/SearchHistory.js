export default function getSearchHistory(req, res) {
    if (req.method !== "GET") {
        res.status(500).json({ message: "Method not allowed" })
        return
    }
    res.json({ message: "Hello" })
}