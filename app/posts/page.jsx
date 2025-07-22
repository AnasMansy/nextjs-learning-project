


import { log } from "console";
import { revalidatePath } from "next/cache";
import Link from "next/link";
export default async function PostPage() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 10 }
    })

    const posts = await response.json();
    console.log(posts);
    const postJsx = posts.map((post) => {
        return (
            <Link key={post.id} href={`/posts/${post.id}`} className="post-link">
                <li key={post.id} className="post-item" style={{ background: 'white', marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h2 style={
                        { color: 'black', fontSize: 'bold', marginBottom: '10px' }
                    }>{post.title}</h2>
                    <p style={{ color: "black", fontSize: '15px' }}>{post.body}</p>
                </li>
            </Link>
        )
    })

    return (
        <div >
            <h1>Posts</h1>
            <ul className="posts-list" style={{ listStyle: 'none', padding: 0, widows: '50%' }}>
                {postJsx}
            </ul>
        </div>

    );
}