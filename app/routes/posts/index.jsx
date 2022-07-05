import { useLoaderData, Link } from "@remix-run/react"

export const loader = () =>
{
 const data = {
    posts:[
        {
            id:1, title:"post 1", body:"This is post 1"
        },   {
            id:2, title:"post 2", body:"This is post 2"
        },   {
            id:3, title:"post 3", body:"This is post 3"
        }
    ]
 }
    return data
}

function PostItems() {
    const {posts} = useLoaderData()
  return (
    <>
        <div className="page-header">
            <h1>Posts</h1>
            <Link to='/posts/new' className="btn">New Post</Link>
        </div>
    <ul className="posts-list">
    {posts.map(post => (
        <li key={post.id}>
            <Link to={post.id}>
                <h3>{post.title}</h3>
                <p></p>
            </Link>
        </li>
))}
    </ul>
    
        </>
  )
}

export default PostItems