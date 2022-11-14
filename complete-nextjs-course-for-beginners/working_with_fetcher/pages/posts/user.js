import useSWR from 'swr'

const fetcher = async url => {
    const res = await fetch(url)
    if (!res.ok) {
        const error = new Error("An error occured while fetching data")
        error.info = await res.json()
        error.status = res.status
        throw error
    }
    return res.json()
}

export default function Users() {
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


// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3000/api/users')
//     const users = await res.json()
//     return {
//         props: {
//             users
//         }
//     }
// }


function getData() {
    const { data, error } = useSWR('http://localhost:3000/api/users', fetcher, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.status === 404) return
            if (key === '/api/users') return
            if (retryCount >= 10) return
            setTimeout(() => revalidate({ retryCount }), 5000)
        }
    })
    return {
        users: data,
        isLoading: !error && !data,
        isError: error
    }
}