import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Profile from '../Profile/Profile';
import './PostDetails.css';

const PostDetails = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState("");
    const {postId} = useParams();
    const userId = post.userId;

    useEffect(() => {
        const url1 = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const url2 = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const url3 = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

        fetch(url1)
            .then(res => res.json())
            .then(data => setPost(data));

        userId && 
        fetch(url2)
            .then(res => res.json())
            .then(data => setUserName(data.name));

        fetch(url3)  
            .then(res => res.json())
            .then(data => setComments(data));
    }, [postId, userId]);
    
    return (
        <div className="post-details">
            <Container  maxWidth="xl">
                <div className="container-body">
                    <Profile />

                    <div className="post-section">
                        <div className="post">
                            <h2 className="title">{post.title}</h2>        
                            <small className="user-name">{userName}</small>
                            <p className="description">{post.body}</p>
                        </div>
                        <div className="comments">
                            <h4 style={{color: "goldenrod"}}>Comments</h4>
                            {
                                comments.map(comment => <Comment key={comment.id.toString()} comment={comment} />)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PostDetails;