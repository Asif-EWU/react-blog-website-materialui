import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const postId = useParams();
    console.log(postId);

    return (
        <div>
            this is post details
        </div>
    );
};

export default PostDetails;