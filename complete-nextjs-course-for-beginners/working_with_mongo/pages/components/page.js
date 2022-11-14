import Layout from "../layout/layout"

export default function Page(props) {
    return (
        <Layout>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </Layout>
    )
}

export async function getServerSideProps() {
    const posts = { title: "Post title", description: "Post description from Server Side Rendering Props" }
    return {
        props: posts
    }
}