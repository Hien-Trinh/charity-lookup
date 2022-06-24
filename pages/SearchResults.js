import SearchBar from "../components/SearchBar"

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
            <div className="pt-10">
                <SearchBar />
            </div>
            <div className="flex items-center justify-center pt-10">
                <ul className="w-1/2">
                    {allSearchResult.map(res => (
                        <li key={res.id}>
                            {res.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
