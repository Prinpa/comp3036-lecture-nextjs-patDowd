import {prisma} from "./client"

export async function Postlist() {
    const posts = await prisma.post.findMany()
    const tags = await prisma.tag.findMany()
    console.log(tags)
    return (
    <>      
        {posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        ))}
    </>)
} 