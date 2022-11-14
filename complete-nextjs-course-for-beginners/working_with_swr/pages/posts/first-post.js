import Head from "next/head"
import { useEffect, useState } from "react"
import Layout from "../layout/layout"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default function FirstPost() {
    const [posts, setPosts] = useState(null)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        sleep(3000).then(() => {
            setPosts({ title: "Post title", description: "Post description" })
            setLoading(false)
        })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!posts) return <p>No posts yet :\</p>
    return (
        <Layout>
            <Head>
                <title>Nextjs First Post</title>
            </Head>
            <h1>{posts.title}</h1>
            <p>{posts.description}</p>
        </Layout>
    )
}