

import PostDetails from '@/app/components/PostDetails';
import { Suspense } from 'react';
export default async function PostDetailsPage({ params }) {

   
    return (
        <div>
            <h1>Post Details Page</h1>
            <Suspense fallback={<div>Loading...</div>}>  
            
            <PostDetails params={params} />
            </Suspense>
        </div>
    );
}
