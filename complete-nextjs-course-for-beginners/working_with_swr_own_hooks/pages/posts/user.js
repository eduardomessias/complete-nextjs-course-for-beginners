import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(r => r.json())

export default function Users({ users }) {
    const { users, isLoading, isError } = getData()
    if (isError) return <div>Error fetching data</div>
    if (isLoading) return <div>Loading...</div>
    return (
        <article>
            {
                users.map(u => (
                    <div>
                        <h1>{u.name}</h1>
                    </div>
                ))
            }
        </article>
    )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()
    return {
        props: {
            users
        }
    }
}


function getData() {
    const { data, error } = useSWR('http://localhost:3000/api/users', fetcher)
    return {
        users: data,
        isLoading: !error && !data,
        isError: error
    }
}