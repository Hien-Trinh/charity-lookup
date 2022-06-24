export async function getServerSideProps(context) {
    const dir = `https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=${context.query.dir}`

    const res = await fetch(dir, {
        method:'GET',
        headers: {
            Accept: 'application/json'
        }
    })
    .then(res => res.json())

    const allSearchResult = await res.search.response.projects.project

    return { props: { allSearchResult } }
}

export default function SearchResults({ allSearchResult }) {
    return (
        <div>
            <p className="bg-slate-400">Hello</p>
            <ul>
                {allSearchResult.map(res => (
                    <li key={res.id}>{res.title}</li>
                ))}
            </ul>
        </div>
    )
}
