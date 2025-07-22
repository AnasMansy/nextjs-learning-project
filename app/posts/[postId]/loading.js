export default function LoadingPostDetails () {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Loading Post Details...</h1>
            <p>Please wait while we fetch the post details.</p>
            <div className="spinner" style={{ margin: '20px auto', width: '50px', height: '50px', border: '5px solid #ccc', borderTop: '5px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
           
        </div>
    );
  
}
