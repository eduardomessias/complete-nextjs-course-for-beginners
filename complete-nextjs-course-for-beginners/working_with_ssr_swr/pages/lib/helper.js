export function getAllPosts(id) {
    const postData = [
        { id: 1, title: "Post title", description: "First post description" },
        { id: 2, title: "Post title", description: "Second post description" }
    ]
    if (id) {
        return postData.filter(p => p.id == id)
    }
    return postData
}