export default function getSearchHistoryById(req, res) {
    res.json({ byId: req.query.id, message: "get search history by Id" })
}