export default async function getSearch(ctx) {
    const dir = `https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=${ctx.query.dir}`

    const result = await fetch(dir, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json())

    var allSearchResult = result.search.response.projects
    console.log(allSearchResult)
    var output = "empty"

    if (allSearchResult !== undefined) {
        output = allSearchResult.project
    }

    return output
}