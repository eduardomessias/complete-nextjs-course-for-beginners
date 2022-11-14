import { getAllPosts } from "../lib/helper"
import { useRouter } from 'next/router'

export default function Post({ posts }) {
    const router = useRouter()
    const { id } = router.query
    return (
        <article>
            <button onClick={() => router.push('/components/user')}>
                Go to users
            </button>
            {
                posts.map(p => (
                    <div key={p.id}>
                        <h1>{p.id}</h1>
                        <h1>{p.title}</h1>
                        <p>{p.description}</p>
                    </div>
                ))
            }
        </article>
    )
}


export async function getStaticProps({ params }) {
    const { id } = params
    const posts = getAllPosts(id)
    return {
        props: {
            posts
        }
    }
}


export async function getStaticPaths() {
    const posts = getAllPosts()
    const paths = posts.map(p => (
        {
            params: {
                id: p.id.toString()
            }
        }
    ))
    return {
        paths,
        fallback: false
    }
}