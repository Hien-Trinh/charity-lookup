export default function getPersonById(req, res) {
    res.json({ byId: req.query.id, message: "get person by Id" })
}