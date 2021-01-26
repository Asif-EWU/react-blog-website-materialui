import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    const post = props.post;
    const {userId, id, title, body} = post;
    const subBody = body.substring(0, 100);
    
    return (
        <div className="singlePost">
            <h3 className="title">{title}</h3>        
            <small>{userId}</small>
            <p>{subBody} ... </p>
            <Link to={"/post/" + id}><span style={{color: "goldenrod"}}>see more</span></Link>
            <hr/>
        </div>
    );
};

export default SinglePost;