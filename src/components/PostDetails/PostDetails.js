import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Profile/Profile';

const PostDetails = () => {
    const {postId} = useParams();
    console.log(postId);

    return (
        <div className="post-details">
            <Profile />
        </div>
    );
};

export default PostDetails;