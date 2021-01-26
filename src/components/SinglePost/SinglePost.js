import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = (props) => {
    const post = props.post;
    const {userId, id, title, body} = post;
    const subBody = body.substring(0, 200);
    const [userName, setUserName] = useState("");
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUserName(data.name))
        }, [userId]);

    return (
        <div className="singlePost">
            <h2 className="title">{title}</h2>        
            <small className="user-name">{userName}</small>
            <p className="description">{subBody} ... </p>
            <Link to={"/post/" + id}>see more</Link>
            <hr/>
        </div>
    );
};

export default SinglePost;