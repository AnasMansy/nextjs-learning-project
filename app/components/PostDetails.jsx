


export default async function PostDetails({ params }) {

    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading delay
    
    console.log(params.postId);
    const postId = params.postId;
    // Fetch post details using postId
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: { revalidate: 10 }
    });
    const post = await response.json();
    console.log(post);
    return (
        <div> 
            <h2  style={{ color: 'green', fontSize: 'bold', marginBottom: '10px' ,borderBottom: '2px solid green' }}
            >{post.title}</h2>
            <p style={{ color: "gray", fontSize: '22px' }}
            >{post.body}</p>
        </div>
    );
}
