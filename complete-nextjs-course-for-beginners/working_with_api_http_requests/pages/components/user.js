export default function Users({ users }) {
    return (
        <article>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                    </div>
                ))
            }
        </article>
    )
}


export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/users")
    const users = await res.json()
    return {
        props: {
            users
        }
    }
}