export default async function getSearch(ctx) {
    const q = ctx.query.dir
    const start = ctx.query.start ? ctx.query.start : 0
    const dir = `https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=${q}&start=${start}`

    const result = await fetch(dir, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json())

    try {
        const numberFound = result.search.response.numberFound
        var allSearchResult = result.search.response.projects
        var output = "empty"

        if (allSearchResult !== undefined) {
            output = allSearchResult.project
        }

        return { output, q, start, numberFound }
    } catch (error) {
        console.log(error)
        ctx.res.writeHead(302, {
            Location: "http://localhost:3000",
        })
        ctx.res.end()
        return
    }
}
